<template>
<!-- <transition="calendar" transition-mode="out-in"> -->
    <div v-bind:class="`calendar ${popup ? 'calendar-popup':'calendar-static'}`" v-show="show" :style="{'left':x+'px','top':y+'px'}">
        <div class="calendar-tools">
            <i class="icon icon-left-nav  float left glyphicon glyphicon-menu-left" @click="prev"></i>
            <i class="icon icon-right-nav float right glyphicon glyphicon-menu-right" @click="next"></i>
            <div class="text center-inline">
                <input type="number" v-model.number="year" @change="render(year, month)" min="1970" max="2100" maxlength="4">/ {{month}}
            </div>
            <div class="calendar-panes" v-for="(amonth, index) in days">
                <div class="text center-inline" v-if="pickerstyle>1">
                    <span v-if="month+index <= 12">{{year}}/{{month+index}}</span>
                    <span v-else>{{year+1}}/{{month+index-12}}</span>
                </div>
                <table cellpadding="5">
                    <thead>
                        <tr>
                            <td v-for="week in weeksHan" class="week">{{week}}</td>
                        </tr>
                    </thead>
                    <tr v-for="(day, k1) in amonth">
                        <td v-for="(child, k2) in day"
                            v-bind:class="{ 'selected': child.selected, 'disabled': child.disabled }"
                            @click="select(index, k1,k2,$event)"
                            @touchstart="select(index,k1,k2,$event)">
                            {{child.day}}
                            <div class="lunar" v-if="lunar">
                                {{child.outadd}}
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="calendar-time" v-show="type=='datetime'||type=='time'">
                <div class="timer">
                    <input type="number" v-model.number="hour"  min="0" max="23" maxlength="2">时
                    <input type="number" v-model.number="minute" min="0" max="59" maxlength="2">分
                    <input type="number" v-model.number="second" min="0" max="59" maxlength="2">秒
                </div>
            </div>
            <div class="calendar-button" v-show="type=='datetime'||type=='time'||range">
                <button @click="ok">确定</button>
                <button @click="cancel" class="cancel">取消</button>
            </div>
        </div>
    </div>
<!-- </transition> -->
</template>

<script>
module.exports = {
    props: {
        //显示未来几个月的日历 (0为一年)
        //普通日历(1)  是否选择双日历面板(2), 或展开型的日历面板(0)
        pickerstyle: {
            type: Number,
            default: 1 // 1, 2, 0
        },
        popup: { //是否浮层显示
            type: Boolean,
            default: true
        },
        //type仅日期date //datatime 日期与时间
        type: {
            type: String,
            default: "date"
        },
        //默认值
        value: {
            type: String,

            default: ""
        },
        //日历是否显示与选择后自动隐藏
        show: {
            type: Boolean,

            default: false
        },
        autohide: {
            type: Boolean,
            default: false
        },
        //日历坐标x, y
        x: {
            type: Number,
            default: 0
        },
        y: {
            type: Number,
            default: 0
        },
        // min max 允许操作的日期范围
        min: {
            type: String,
            default: ""
        },
        max: {
            type: String,
            default: ""
        },
        //双联日期选择器的第二个选择器有些属性。其值需为第一个选择器的值
        begin: {
            type: String,
            default: ''
        },
        end: {
            type: String,
            default: ''
        },
        // 是否允许阴历lunar|节气terms|节日festival
        lunar: {
            type: Boolean,
            default: false
        },
        terms: {
            type: Boolean,
            default: false
        },
        festival: {
            type: Boolean,
            default: false
        }
    },
    data: function () {
        return {
            //注意传进去的month为5即五月, 在程序里月份都应该是4(即this.month=5，即为5月)
            year: 0,
            month: 0,
            day: 0,
            hour: 0,
            minute: 0,
            second: 0,
            sep: "-",
            days: [],
            innerMin: this.min,
            innerMax: this.max,
            selected: [],
            weeksHan: ['日', '一', '二', '三', '四', '五', '六'],
            weeksEng: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            months: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
            monthsEng: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            monthsHan: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
            lunarStr: ['初', '十', '廿', '三'],
            lunardays: {
                '0101': '春节',
                '0115': '元宵',
                '0505': '端午',
                '0707': '七夕',
                '0715': '中元',
                '0815': '中秋',
                '0909': '重阳',
                '1208': '腊八',
                '1224': '小年'
            },
            salardays: {
                '0101': '元旦',
                '0214': '情人节',
                '0308': '妇女节',
                '0312': '植树节',
                '0401': '愚人节',
                '0501': '劳动节',
                '0504': '青年节',
                '0601': '儿童节',
                '0701': '建党节',
                '0801': '建军节',
                '0910': '教师节',
                '1001': '国庆节',
                '1224': '平安夜',
                '1225': '圣诞'
            }
        }
    },
    created: function () {
        var now = new Date();
        // 如果有默认值
        if (this.value) {
            var timeAtom = this.gettime(this.value);
            this.year = timeAtom[0];
            this.month = timeAtom[1];
            this.day = timeAtom[2];
            if (this.type == "datetime") {
                this.hour = timeAtom[3] || 0;
                this.minute = timeAtom[4] || 0;
                this.second = timeAtom[5] || 0;
            }
        } else { //取当前时间为默认值
            this.year = now.getFullYear();
            this.month = now.getMonth() + 1;
            this.day = now.getDate();
            this.hour = this.zero(now.getHours());
            this.minute = this.zero(now.getMinutes());
            this.second = this.zero(now.getSeconds());
            // this.value = this.output([this.year,this.month,this.day]);
            // this.value = this.year + '-' + this.month + '-' + this.day;
        }

        this.currentMonth = this.month;
        this.render(this.year, this.month);
    },
    watch: {
        'show': function (val, old) {
            if (val) {
                this.render(this.year, this.month);
            }
        }
    },
    methods: {
        zero: function (n) {
            return n < 10 ? '0' + n : n;
        },
        //time string 2 time element array;
        gettime: function (dateStr) {
            var arr = [];
            dateStr.replace(/\d+/g, function ($i) {
                arr.push(parseInt($i, 10));
            });
            return arr;
        },
        //计算几个月后的年与月
        addmonths: function (y, m, addmonth) {
            var total = m + addmonth,
                next = total > 12,
                prev = total < 1;
            return next ? {
                y: y + 1,
                m: total - 12
            } : (prev ? {
                y: y - 1,
                m: 12 + total
            } : {
                y: y,
                m: total
            });
        },
        //获取某天的所有信息 m+1才是显示用的月分
        getDayInfo: function (y, m, d) {
            var date = new Date(y, m, d);
            var dayinfo = {
                day: d,
                month: m,
                year: y,
                date: date,
                lunar: this.getLunarInfo(date),
                sterm: this.solarTermInfo(y, m)[d],
                salarfest: this.salardays[this.zero(m + 1) + this.zero(d)] //这里的月份用的是视图的
            };
            dayinfo.lunarfest = this.lunardays[this.zero(dayinfo.lunar.month) + this.zero(dayinfo.lunar.day)];
            dayinfo.tolunar = this.tolunar(dayinfo.lunar.day);
            dayinfo.outadd = this.outadd(dayinfo);
            // console.log(y, m, d, dayinfo.lunar.month, dayinfo.lunar.day)
            return dayinfo;
        },
        //显示的附加日历信息， 优先级是: 节日>节气>今天>农历
        outadd: function (daysinfo) {
            return daysinfo.lunarfest ? daysinfo.lunarfest :
                (daysinfo.salarfest ? daysinfo.salarfest : (daysinfo.sterm ? daysinfo.sterm : daysinfo.tolunar));
        },
        //将农历数字转化为汉字
        tolunar: function (d) {
            var dstr = d + '',
                str = this.monthsHan,
                leftDeco = this.lunarStr[0],
                rightNum = dstr.length < 2 ? '' : dstr.substring(1),
                rightDeco = rightNum === '0' ? '十' : str[Number(rightNum) - 1];
            if (d > 10) {
                leftDeco = this.lunarStr[1];
                if (d >= 20) {
                    leftDeco = this.lunarStr[2];
                    if (d >= 30) {
                        leftDeco = this.lunarStr[3];
                    }
                }
            }
            return leftDeco + (dstr.length < 2 ? str[d - 1] : rightDeco);
        },
        //calc is between by year|month|day, for performance, no new Date()
        //传入时为m为Date对象里的month, 比较时m为字符意义上的month
        isBetween: function (y, m, d, min, max) {
            var between = true;
            m = m + 1;
            if (min) {
                var bdate = this.gettime(min);
                var by = bdate[0],
                    bm = bdate[1],
                    bd = bdate[2];
                if (y < by) {
                    between = false;
                } else if (y === by) {
                    if (m < bm) {
                        between = false;
                    } else if (m === bm) {
                        if (d < bd) {
                            between = false;
                        }
                    }
                }
            }
            if (max) {
                var edate = this.gettime(max);
                var ey = edate[0],
                    em = edate[1],
                    ed = edate[2];
                if (y > ey) {
                    between = false;
                } else if (y === ey) {
                    if (m > em) {
                        between = false;
                    } else if (m === em) {
                        if (d > ed) {
                            between = false;
                        }
                    }
                }
            }
            // console.log(y, m, d, min, max, between, 'between');
            return between;
        },
        //计算渲染每个月的日历数据
        //考虑已有值的需要选择状态
        //已有begin/end范围的需要禁止可点击状态
        //多维数组即日历面板数据[[1month[1row][2row][2month[1row][2row]]
        calcPane: function (y, m) {
            var that = this,
                options, line = 0,
                temp = [];
            m = m - 1;
            var prevMonthLastDate = new Date(y, m - 1, 0).getDate(); //前一个月的最后一天
            var currMonth1DayWeek = new Date(y, m, 1).getDay(); //当月第一天星期
            var currMonthLastDate = new Date(y, m + 1, 0).getDate(); //当月最后一天

            //第一行(上个月)
            temp[line] = [];
            if (currMonth1DayWeek) {
                var k = prevMonthLastDate - currMonth1DayWeek + 1;
                for (var j = 0; j < currMonth1DayWeek; j++) {
                    options = that.getDayInfo(y, m - 1, k);
                    options.disabled = true;
                    temp[line].push(options);
                    k++;
                }
            }

            var begin = this.begin || this.value; //没有begin时即为this.value一个值非范围
            var end = this.end || this.value;
            if (this.begin) {
                this.innerMin = this.begin;
            }
            if (this.end) {
                this.innerMax = this.end;
            }

            //当前月
            for (var i = 1; i <= currMonthLastDate; i++) {
                options = that.getDayInfo(y, m, i);
                options.disabled = !this.isBetween(y, m, i, this.innerMin, this.innerMax);

                if (begin && end) {
                    options.selected = this.isBetween(y, m, i, begin, end);
                }

                var index = [0, line, new Date(y, m, i).getDay()].join('/');
                if (options.selected && !~this.selected.indexOf(index)) {
                    this.selected.push(index);
                }
                var dow = new Date(y, m, i).getDay(); //week
                if (dow == 0) {
                    temp[line] = [];
                }
                temp[line].push(options);
                if (dow == 6) {
                    line++;
                }
            }
            //最后一行(下个月)
            var kk = 1;
            for (dow; dow < 6; dow++) {
                options = that.getDayInfo(y, m + 1, kk);
                options.disabled = true;
                temp[line].push(options);
                kk++;
            }
            // console.log(this.selected,' this.selected');
            return temp;
        },
        //渲染 pickerstyle 个月的日历数据
        render: function (y, m) {
            this.days = [this.calcPane(y, m)];
            if (this.pickerstyle !== 1) {
                var daysarr = [];
                for (var i = 0; i < this.pickerstyle; i++) {
                    var month = m + i;
                    if (month > 12) {
                        month = month - 12;
                        if (month === 12) y++;
                    }
                    daysarr.push(this.calcPane(y, month));
                }
                this.days = daysarr;
            }
        },
        prev: function (e) {
            var ym = this.addmonths(this.year, this.month--, -1);
            this.year = ym.y;
            this.month = ym.m;
            this.render(ym.y, ym.m);
        },
        next: function (e) {
            var ym = this.addmonths(this.year, this.month++, 1);
            this.year = ym.y;
            this.month = ym.m;
            this.render(ym.y, ym.m);
        },
        //k0,第几月的面板， k1行，k2列
        select: function (k0, k1, k2, e) {
            var that = this,
                date = this.days[k0][k1][k2];
            this.day = date.day;
            this.currentMonth = date.month + 1;
            this.setRange(false);
            var selval = date.year + '-' + this.currentMonth + '-' + date.day;
            if (!this.begin) {
                this.selected = [
                    [k0, k1, k2].join('/')
                ];
            } else {
                this.selected = [];
                this.days.forEach(function (month, i) {
                    month.forEach(function (row, ind) {
                        row.forEach(function (day, index) {
                            day.selected = that.isBetween(day.year, day.month, day.day, that.begin, selval);
                            var arrindex = [i, ind, index].join('/');
                            if (day.selected && !~that.selected.indexOf(arrindex)) {
                                that.selected.push(arrindex);
                            }
                        });
                    });
                });
            }
            this.setRange(true);
            var d = this.addmonths(this.year, this.month, k0);
            this.value = this.output([d.y, d.m, this.day]);
            if (this.autohide && this.type == 'date') {
                this.show = false;
            }
        },
        // 根据日期或日期坐标获取坐标范围数组
        getRange: function (begin, end) {
            // [0, 0, 0]
            // [1, 6, 5]
            var endDay = this.days[end[0]][end[1]][end[2]];
            var days = (new Date(end) - new Date(begin)) / 3600000 * 24;
            for (var i = 0; i < days; i++) {
                // this.days[]
            }
        },
        setRange: function (isSelect) {
            var selected = this.selected;
            for (var s = 0; s < selected.length; s++) {
                var si = selected[s].split('/');
                // console.log(this.days[si[0]][si[1]][si[2]], 'si');
                var siitem = this.days[si[0]][si[1]];
                if (siitem) {
                    siitem[si[2]].selected = isSelect; // 设置当前范围选中
                }
            }
        },
        ok: function () {
            this.value = this.output([this.year, this.month, this.day, this.hour, this.minute, this.second]);
            this.show = false;
        },
        cancel: function () {
            this.show = false;
        },
        // 格式化输出
        output: function (args) {
            if (this.type == 'date') {
                return args[0] + this.sep + this.zero(args[1]) + this.sep + this.zero(args[2]);
            }
            if (this.type == 'time') {
                return this.zero(args[3]) + ":" + this.zero(args[4]) + ":" + this.zero(args[5])
            }
            if (this.type == 'datetime') {
                return args[0] + this.sep + this.zero(args[1]) + this.sep + this.zero(args[2]) + " " + this.zero(args[3]) + ":" + this.zero(args[4]) + ":" + this.zero(args[5])
            }
        },

        // 农历二十四节气，相关代码在网络上获取并修改
        solarTermInfo: (function () {
            var cache = {};
            var cachekeys = [];
            var solarTerm = ['小寒', '大寒', '立春', '雨水', '惊蛰', '春分', '清明', '谷雨', '立夏', '小满', '芒种', '夏至', '小暑', '大暑', '立秋', '处暑', '白露', '秋分', '寒露', '霜降', '立冬', '小雪', '大雪', '冬至'];
            var sTermInfo = [0, 21208, 42467, 63836, 85337, 107014, 128867, 150921, 173149, 195551, 218072, 240693, 263343, 285989, 308563, 331033, 353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758];
            // 返回某年的第n个节气为几日(从0小寒起算)
            var getSolarTermIndex = function (year, index) {
                var offDate = new Date((31556925974.7 * (year - 1900) + sTermInfo[index] * 60000) + Date.UTC(1900, 0, 6, 2, 5));
                return offDate.getUTCDate();
            };

            // 返回该月的节气信息
            var getMonthSolarTerms = function (year, month) {
                if (year instanceof Date) {
                    month = year.getMonth();
                    year = year.getFullYear();
                }
                var key = '' + year + month;
                if (key in cache) {
                    return cache[key];
                }
                var ret = cache[key] = {};
                var index;
                index = getSolarTermIndex(year - 1900, month * 2);
                ret[index - 1] = solarTerm[month * 2];
                index = getSolarTermIndex(year - 1900, month * 2 + 1);
                ret[index - 1] = solarTerm[month * 2 + 1];
                cachekeys.push(key);
                if (cachekeys.length > 12) {
                    delete cache[cachekeys.shift()];
                }
                return ret;
            }

            return getMonthSolarTerms;
        })(),

        // 农历
        getLunarInfo: (function () {
            // 农历月份信息表
            var lunarInfo = [
                0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2,
                0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977,
                0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970,
                0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950,
                0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557,
                0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5d0, 0x14573, 0x052d0, 0x0a9a8, 0x0e950, 0x06aa0,
                0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0,
                0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b5a0, 0x195a6,
                0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570,
                0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0,
                0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5,
                0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930,
                0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530,
                0x05aa0, 0x076a3, 0x096d0, 0x04bd7, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45,
                0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0
            ];

            //传回农历 y 年的总天数
            function lYearDays(y) {
                var i, sum = 348
                for (i = 0x8000; i > 0x8; i >>= 1) sum += (lunarInfo[y - 1900] & i) ? 1 : 0
                return (sum + leapDays(y))
            }

            //传回农历 y 年闰月的天數
            function leapDays(y) {
                if (leapMonth(y)) return ((lunarInfo[y - 1900] & 0x10000) ? 30 : 29)
                else return (0)
            }

            //传回农历 y 年闰哪个月 1-12 , 沒闰传回 0
            function leapMonth(y) {
                return (lunarInfo[y - 1900] & 0xf)
            }

            //传回农历 y 年m月的总天数
            function monthDays(y, m) {
                return ((lunarInfo[y - 1900] & (0x10000 >> m)) ? 30 : 29)
            }

            //公历转农历
            function convertToLunar(objDate) {
                var i, leap = 0,
                    temp = 0;
                var baseDate = new Date(1900, 0, 31);
                var offset = (objDate - baseDate) / 86400000;

                var result = {};
                result.dayCyl = offset + 40;
                result.monCyl = 14;

                for (i = 1900; i < 2050 && offset > 0; i++) {
                    temp = lYearDays(i);
                    offset -= temp;
                    result.monCyl += 12;
                }

                if (offset < 0) {
                    offset += temp;
                    i--;
                    result.monCyl -= 12;
                }

                result.year = i;
                result.yearCyl = i - 1864;

                leap = leapMonth(i); //闰哪个月
                result.isLeap = false;

                for (i = 1; i < 13 && offset > 0; i++) {
                    //闰月
                    if (leap > 0 && i == (leap + 1) && result.isLeap == false) {
                        --i;
                        result.isLeap = true;
                        temp = leapDays(result.year);
                    } else {
                        temp = monthDays(result.year, i);
                    }

                    //解除闰月
                    if (result.isLeap == true && i == (leap + 1)) {
                        result.isLeap = false;
                    }

                    offset -= temp
                    if (result.isLeap == false) {
                        result.monCyl++;
                    }
                }

                if (offset == 0 && leap > 0 && i == leap + 1)
                    if (result.isLeap) {
                        result.isLeap = false;
                    } else {
                        result.isLeap = true;
                        --i;
                        --result.monCyl;
                    }

                if (offset < 0) {
                    offset += temp;
                    --i;
                    --result.monCyl;
                }

                result.month = i;
                result.day = offset + 1;
                return result;
            }

            return convertToLunar;
        })()
    }
}
</script>

<style lang="sass" scoped>
.center-inline {
    display: inline-block;
}

.calendar {
    width: 300px;
    padding: 10px;
    background: #fff;
    border: 1px solid #DEDEDE;
    border-radius: 2px;
    opacity: .95;
    transition: all .5s ease;
    z-index: 100;
    &.calendar-popup {
        position: absolute;
    }
    &.calendar-static {
        width: 100%;
    }
}

.calendar-enter,
.calendar-leave-active {
    opacity: 0;
    transform: translate3d(0, -10px, 0);
}

.calendar:before {
    position: absolute;
    left: 30px;
    top: -10px;
    content: "";
    border: 5px solid rgba(0, 0, 0, 0);
    border-bottom-color: #DEDEDE;
}

.calendar:after {
    position: absolute;
    left: 30px;
    top: -9px;
    content: "";
    border: 5px solid rgba(0, 0, 0, 0);
    border-bottom-color: #fff;
}

.calendar-panes {
    background: #fff;
}

.calendar-tools {
    font-size: 20px;
    line-height: 32px;
    color: #5e7a88;
    text-align: center;
    .float.left {
        float: left;
    }
    .float.right {
        float: right;
    }
    input {
        font-size: 20px;
        line-height: 32px;
        color: #5e7a88;
        width: 80px;
        text-align: center;
        border: none;
        background-color: transparent;
    }
    &>i {
        margin: 0 16px;
        line-height: 32px;
        cursor: pointer;
        color: #707070;
    }
    &>i:hover {
        color: #5e7a88;
    }
}

.calendar table {
    clear: both;
    width: 100%;
    margin-bottom: 10px;
    border-collapse: collapse;
    color: #444444;
}

.calendar td {
    margin: 2px !important;
    padding: 8px 0;
    width: 14.28571429%;
    text-align: center;
    vertical-align: middle;
    font-size: 16px;
    line-height: 125%;
    cursor: pointer;
    &:hover {
        background: #f3f8fa;
    }
    &.week {
        pointer-events: none !important;
        cursor: default !important;
    }
    &.disabled {
        color: #c0c0c0;
        pointer-events: none !important;
        cursor: default !important;
    }
    &.selected {
        background-color: #5e7a88;
        color: #fff;
        font-size: 16px;
    }
}

.calendar thead td {
    text-transform: uppercase;
}

.calendar .timer {
    margin: 10px 0;
    text-align: center;
    input {
        border-radius: 2px;
        padding: 5px;
        font-size: 14px;
        line-height: 18px;
        color: #5e7a88;
        width: 50px;
        text-align: center;
        border: 1px solid #efefef;
    }
    input:focus {
        border: 1px solid #5e7a88;
    }
}

.calendar-button {
    text-align: center;
}

.calendar-button button {
    border: none;
    cursor: pointer;
    display: inline-block;
    min-height: 1em;
    min-width: 8em;
    vertical-align: baseline;
    background: #5e7a88;
    color: #fff;
    margin: 0 .25em 0 0;
    padding: .8em 2.5em;
    font-size: 1em;
    line-height: 1em;
    text-align: center;
    border-radius: .3em;
}

.calendar-button button.cancel {
    background: #efefef;
    color: #666;
}

.calendar .lunar {
    font-size: 11px;
    line-height: 150%;
    color: #aaa;
}

.calendar td.selected .lunar {
    color: #fff;
}
</style>
