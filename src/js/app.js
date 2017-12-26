$(function () {
	var faqContent = `<div class="col-md-8 col-sm-10 faq-item mb-3">
		<div class="faq-title d-flex align-items-center">
			<i class="fa fa-plus-square mr-2" aria-hidden="true"></i>
			<i class="fa fa-minus-square mr-2" aria-hidden="true"></i>
			<h5 class="mb-0">投資有金額上下限嗎?</h4>
		</div>
		<div class="faq-content ml-4">
			目前【LnB信用市集】裡的投資金額，每一筆的投資最低為1000元，單筆上限為您當時可見的剩餘可投資額度， 您可以進行多筆的投資組合，總額無上限，也請注意在【LnB信用市集】的投資，您將每月回收部分本金及利息，但無法提前贖回全部投資金額，因此投資前請確認。
		</div>
	</div>`
	for (var i = 0; i < 10; i++) {
		$('.menu-modal .container[data-modal="faq"] .row').append(faqContent)
	}
	// 彈出MENU
	$('.richers-menu').on('click', 'a', function () {
		var _index = $(this).index();
		var _data = $(this).data('modal');
		if ($('.menu-modal .container').eq(_index).hasClass('show')) {
			$('.menu-modal').removeClass('show')
			setTimeout(function () {
				$('.menu-modal').css('display', 'none')
				$('.menu-modal .container').removeClass('show')
				$('.richers-menu a').removeClass('active')
			}, 300)
		} else {
			$('.menu-modal').css('display', 'block')
			setTimeout(function () {
				$('.menu-modal').addClass('show')
			}, 20)
			$('.menu-modal .container').each(function () {
				if (_data == $(this).data('modal')) {
					$(this).addClass('show').siblings().removeClass('show')
				}
			})
			$(this).addClass('active').siblings().removeClass('active')
		}

	})

	// 關閉MENU
	$('.menu-modal').on('click', '.modal-close', function () {
		$('.menu-modal').removeClass('show')
		setTimeout(function () {
			$('.menu-modal').css('display', 'none')
			$('.richers-menu a').removeClass('active')
			$('.menu-modal .container').removeClass('show')
		}, 300)
	})

	// 問答中心切換
	$('.faq-title').on('click', function () {
		$(this).closest('.faq-item').toggleClass('active')
	})

	// 滾動條隱藏
	//$('.menu-modal').perfectScrollbar();
	var ps = new PerfectScrollbar('.menu-modal');
})