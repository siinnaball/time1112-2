function main() {

    var oneday = 60 * 60 * 24

    var nowTime = Math.floor(Date.now() / 1000)

    var week = Math.floor(nowTime / oneday) % 7
    var week_days = ["星期四", "星期五", "星期六", "星期日", "星期一", "星期二", "星期三"]
    var real_week = week_days[week]


    //-----------------

    var real_year = 1970

    while (true) {
        var year = (real_year % 4 == 0) ? 366 : 365
        if (nowTime >= year * oneday) {
            nowTime -= year * oneday
            real_year += 1
        } else {
            break
        }
    }

    var is_leap_year = (real_year % 4 == 0)

    //------------


    var month_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if (is_leap_year == true) {
        month_days[1] = 29
    }

    var month = 0
    for (var i = 0; i < month_days.length; i++) {
        nowTime -= (month_days[i] * oneday)
        month += 1
        if (nowTime < 0) {
            month -= 1
            nowTime += (month_days[i] * oneday)
            break
        }
    }


    real_month = month + 1

    day = Math.floor(nowTime / oneday)
    real_day = day + 1



    hour = Math.floor((nowTime - (day * oneday)) / 3600)
    real_hour = hour + 8

    minute = Math.floor((nowTime - (day * oneday) - (hour * 3600)) / 60)

    sec = nowTime - (day * oneday) - (hour * 3600) - (minute * 60)
    console.log(real_year + "/" + real_month + "/" + real_day + " " + real_week + " " + real_hour + ":" + minute + ":" + sec)
}


function start() {

    setInterval(main, 1000)

}

// start()
main()



