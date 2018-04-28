import $ from './jquery-3.2.1.min.js'

(function ($) {

    var eCalendar = function (options, object) {
        // Initializing global variables
        var adDay = new Date().getDate();
        var adMonth = new Date().getMonth();
        var adYear = new Date().getFullYear();
        var dDay = adDay;
        var dMonth = adMonth;
        var dYear = adYear;
        var instance = object;

        var settings = $.extend({}, $.fn.eCalendar.defaults, options);

        function lpad(value, length, pad) {
            if (typeof pad == 'undefined') {
                pad = '0';
            }
            var p;
            for (var i = 0; i < length; i++) {
                p += pad;
            }
            return (p + value).slice(-length);
        }

        var mouseOver = function () {
            $(this).addClass('c-nav-btn-over');
        };
        var mouseLeave = function () {
            $(this).removeClass('c-nav-btn-over');
        };
        var mouseOverEvent = function () {
            $(this).addClass('c-event-over');
            var d = $(this).attr('data-event-day');
            $('div.c-event-item[data-event-day="' + d + '"]').addClass('c-event-over');
        };
        var mouseLeaveEvent = function () {
            $(this).removeClass('c-event-over')
            var d = $(this).attr('data-event-day');
            $('div.c-event-item[data-event-day="' + d + '"]').removeClass('c-event-over');
        };
        var mouseOverItem = function () {
            $(this).addClass('c-event-over');
            var d = $(this).attr('data-event-day');
            $('div.c-event[data-event-day="' + d + '"]').addClass('c-event-over');
        };
        var mouseLeaveItem = function () {
            $(this).removeClass('c-event-over')
            var d = $(this).attr('data-event-day');
            $('div.c-event[data-event-day="' + d + '"]').removeClass('c-event-over');
        };
        var nextMonth = function () {
            if (dMonth < 11) {
                dMonth++;
            } else {
                dMonth = 0;
                dYear++;
            }
            print();
        };
        var previousMonth = function () {
            if (dMonth > 0) {
                dMonth--;
            } else {
                dMonth = 11;
                dYear--;
            }
            print();
        };

        var isOverCurDate = function () {
            if(dYear > adYear) {
                return false
            } else if (dYear == adYear && dMonth >= adMonth) {
                return false
            } else {
                return true
            }
        };

        var goDetail = function () {
            var day = $(this).text();
            var date = dYear + "-" + (dMonth + 1) + '-' + day;
            // location.href = 'kaoQinDetail.html?date=' + date;
            location.href = '#/views/kaoQinDetail?date=' + date;
        };

        // function loadEvents() {
        //     alert(settings.url);
        //     return false;
        //     if (typeof settings.url != 'undefined' && settings.url != '') {
        //         $.ajax({url: settings.url,
        //             async: false,
        //             success: function (result) {
        //                 settings.events = result;
        //             }
        //         });
        //     }
        // }

        function print() {
            //loadEvents();
            var dWeekDayOfMonthStart = new Date(dYear, dMonth, 1).getDay();
            var dLastDayOfMonth = new Date(dYear, dMonth + 1, 0).getDate();
            var dLastDayOfPreviousMonth = new Date(dYear, dMonth + 1, 0).getDate() - dWeekDayOfMonthStart + 1;

            var cBody = $('<div/>').addClass('c-grid');
            //var cEvents = $('<div/>').addClass('c-event-grid');
            //var cEventsBody = $('<div/>').addClass('c-event-body');
            //cEvents.append($('<div/>').addClass('c-event-title c-pad-top').html(settings.eventTitle));
            //cEvents.append(cEventsBody);
            var cNext = $('<div/>').addClass('c-next c-grid-title');
            var cMonth = $('<div/>').addClass('c-month c-grid-title');
            var cPrevious = $('<div/>').addClass('c-previous c-grid-title');
            cPrevious.html(settings.textArrows.previous);
            cMonth.html(dYear + '年' + settings.months[dMonth] + '月');
            cNext.html(settings.textArrows.next);

            cPrevious.on('mouseover', mouseOver).on('mouseleave', mouseLeave).on('click', previousMonth);
            cNext.on('mouseover', mouseOver).on('mouseleave', mouseLeave).on('click', nextMonth);

            cBody.append(cPrevious);
            cBody.append(cMonth);
            if(isOverCurDate()) cBody.append(cNext);
            
            for (var i = 0; i < settings.weekDays.length; i++) {
                var cWeekDay = $('<div/>').addClass('c-week-day');
                cWeekDay.html(settings.weekDays[i]);
                cBody.append(cWeekDay);
            }
            var day = 1;
            var dayOfNextMonth = 1;
            for (var i = 0; i < 42; i++) {
                var cDay = $('<div/>');
                if (i < dWeekDayOfMonthStart) {
                    cDay.addClass('c-day-previous-month');
                    cDay.html(dLastDayOfPreviousMonth++);
                } else if (day <= dLastDayOfMonth) {
                    cDay.addClass('c-day');
                    cDay.on('click', goDetail);
                    if (day == dDay && adMonth == dMonth && adYear == dYear) {
                        cDay.addClass('c-today');
                    }
                    // for (var j = 0; j < settings.events.length; j++) {
                    //     var d = settings.events[j].datetime;
                    //     if (d.getDate() == day && (d.getMonth() - 1) == dMonth && d.getFullYear() == dYear) {
                    //         cDay.addClass('c-event').attr('data-event-day', d.getDate());
                    //         cDay.on('mouseover', mouseOverEvent).on('mouseleave', mouseLeaveEvent);
                    //     }
                    // }
                    cDay.html(day++);
                } else {
                    cDay.addClass('c-day-next-month');
                    cDay.html(dayOfNextMonth++);
                }
                cBody.append(cDay);
            }
            //var eventList = $('<div/>').addClass('c-event-list');
            // for (var i = 0; i < settings.events.length; i++) {
            //     var d = settings.events[i].datetime;
            //     if ((d.getMonth() - 1) == dMonth && d.getFullYear() == dYear) {
            //         var date = lpad(d.getDate(), 2) + '/' + lpad(d.getMonth(), 2) + ' ' + lpad(d.getHours(), 2) + ':' + lpad(d.getMinutes(), 2);
            //         var item = $('<div/>').addClass('c-event-item');
            //         var title = $('<div/>').addClass('title').html(date + '  ' + settings.events[i].title + '<br/>');
            //         var description = $('<div/>').addClass('description').html(settings.events[i].description + '<br/>');
            //         item.attr('data-event-day', d.getDate());
            //         item.on('mouseover', mouseOverItem).on('mouseleave', mouseLeaveItem);
            //         item.append(title).append(description);
            //         eventList.append(item);
            //     }
            // }
            $(instance).addClass('calendar');
            //cEventsBody.append(eventList);
            $(instance).html(cBody);
        }

        return print();
    }

    $.fn.eCalendar = function (oInit) {
        return this.each(function () {
            return eCalendar(oInit, $(this));
        });
    };

    // plugin defaults
    $.fn.eCalendar.defaults = {
        weekDays: ['日', '一', '二', '三', '四', '五', '六'],
        months: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
        // textArrows: {previous: '<img src="../images/left-arrow.png">', next: '<img src="../images/right-arrow.png">'}
        //eventTitle: 'Eventos',
        //url: 'baidu.com',
   //      events: [
   //          {title: 'Brasil x Cro谩cia', description: 'Abertura da copa do mundo 2014', datetime: new Date(2014, 8, 13, 17)},
   //          {title: 'Brasil x M茅xico', description: 'Segundo jogo da sele莽茫o brasileira', datetime: new Date(2014, 8, 25, 16)},
   //          {title: 'Brasil x Camar玫es', description: 'Terceiro jogo da sele莽茫o brasileira', datetime: new Date(2014, 9, 23, 16)},
			// {title: 'Brasil x Camar玫es', description: 'Terceiro jogo da sele莽茫o brasileira', datetime: new Date(2014, 10, 15, 16)},
			// {title: 'Brasil x Camar玫es', description: 'Terceiro jogo da sele莽茫o brasileira', datetime: new Date(2014, 11, 10, 16)},
			// {title: 'Brasil x Camar玫es', description: 'Terceiro jogo da sele莽茫o brasileira', datetime: new Date(2014, 12, 8, 16)},
			// {title: 'Brasil x Camar玫es', description: 'Terceiro jogo da sele莽茫o brasileira', datetime: new Date(2015, 1,28, 16)},
			// {title: 'Brasil x Camar玫es', description: 'Terceiro jogo da sele莽茫o brasileira', datetime: new Date(2015, 2, 17, 16)}
   //      ]
    };

}(jQuery));