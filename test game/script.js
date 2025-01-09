document.addEventListener('DOMContentLoaded', function () {
    // چک کردن اینکه آیا کاربر قبلاً رای داده است یا نه
    if (localStorage.getItem('voted')) {
        document.getElementById('voted-message').style.display = 'block';
        disableVoting(); // غیرفعال کردن دکمه‌ها اگر کاربر قبلاً رای داده است
    }

    let yesVotes = localStorage.getItem('yesVotes') || 0;
    let noVotes = localStorage.getItem('noVotes') || 0;

    // نمایش تعداد رای‌ها در صفحه
    document.getElementById('yes-count').textContent = yesVotes;
    document.getElementById('no-count').textContent = noVotes;

    // وقتی کاربر به گزینه "بله" رای می‌دهد
    document.getElementById('vote-yes').addEventListener('click', function () {
        if (!localStorage.getItem('voted')) { // فقط اگر رای نداده است
            yesVotes++;
            localStorage.setItem('yesVotes', yesVotes);
            localStorage.setItem('voted', true); // نشان دادن اینکه کاربر رای داده
            document.getElementById('yes-count').textContent = yesVotes;
            document.getElementById('voted-message').style.display = 'block';
            disableVoting(); // غیرفعال کردن دکمه‌ها بعد از رای دادن
        }
    });

    // وقتی کاربر به گزینه "خیر" رای می‌دهد
    document.getElementById('vote-no').addEventListener('click', function () {
        if (!localStorage.getItem('voted')) { // فقط اگر رای نداده است
            noVotes++;
            localStorage.setItem('noVotes', noVotes);
            localStorage.setItem('voted', true); // نشان دادن اینکه کاربر رای داده
            document.getElementById('no-count').textContent = noVotes;
            document.getElementById('voted-message').style.display = 'block';
            disableVoting(); // غیرفعال کردن دکمه‌ها بعد از رای دادن
        }
    });

    // غیرفعال کردن دکمه‌های رای‌دهی
    function disableVoting() {
        document.getElementById('vote-yes').disabled = true;
        document.getElementById('vote-no').disabled = true;
    }
});
