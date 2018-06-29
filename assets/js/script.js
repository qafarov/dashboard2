$(function () {

    //time-btn
    $('.time-btn').click(function () {
        if ($(this).hasClass('time-btn-active')) {
            return
        } else {
            $(this).parent().find('.time-btn-active').removeClass('time-btn-active')
            $(this).addClass('time-btn-active')
        }
    });

    //datatables
    $('#call-history').DataTable({
        "pagingType": "full_numbers",
        "bFilter": false,
        "ordering": false,
        "searching": false,
        "bInfo": false,
        "bLengthChange": true,
        oLanguage: {
            sLengthMenu: "_MENU_",
            "oPaginate": {
                "sFirst": "Birinci",
                "sLast": "Sonuncu",
                "sNext": "<svg class='icon icon-triangle-right'><use xlink:href='#icon-triangle-right'></use></svg>",
                "sPrevious": "<svg class='icon icon-triangle-left'><use xlink:href='#icon-triangle-left'></use></svg>"
            }
        },
        dom: 'lBtp',
        buttons: [
            {
                extend: 'excelHtml5',
                text: "<svg class='icon icon-download'> <use xlink:href='#icon-download'></use></svg> İxrac",
                exportOptions: {
                    columns: "th:not(:last-child)",
                    modifier: {
                        page: "current"
                    }
                }
            }
        ]
    });

    //audioPlayer
        $('.player-play').click(function(){
        var audio = $(this).parent().find('audio'),
            length  = $(this).parent().find('.audio-length')[0];
            //
            var audioFile = $(this).parent().find('.audio-file')[0]
            function formatTime(s, m) {
                var duration = parseInt(audioFile.duration),
                    currentTime = parseInt(audioFile.currentTime),
                    timeLeft = duration - currentTime,
                    s, m;
        
        
                s = timeLeft % 60;
                m = Math.floor(timeLeft / 60) % 60;
        
                s = s < 10 ? "0" + s : s;
                m = m < 10 ? "0" + m : m;
        
                return m + ':' + s;
            }
            //
        if (audio[0].paused && !audio[0].ended) {
            $(this).empty().append('<svg class="icon icon-pause"><use xlink:href="#icon-pause"></use></svg>');
            audio[0].play();
            setInterval(function () {
                length.textContent = formatTime(audioFile.duration);
            }, 100);
        } else {
            $(this).empty().append('<svg class="icon icon-play"><use xlink:href="#icon-play"></use></svg>');
            audio[0].pause();
        }
    });
});