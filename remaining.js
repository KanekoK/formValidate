jQuery(function($) {
  var $formRequired = $('.form_block1 dd.must');
  // 必須のフォームの数
  var initialCntRequired = $formRequired.length;
  // 入力完了の数
  var cntComplete = 0;
  // 残り入力必須項目数
  var cntRemaining = initialCntRequired - cntComplete;

  console.log("必須項目の数：" + initialCntRequired);

  // completeクラスを付け加える
  var counting = function() {
    return $('.form_block1 dd.complete').length;
  };

  // 入力が適切かどうか調べる
  // @return boolean
  var judge = function($this) {
    var errJudge   = $this.children().find('input').hasClass('err');
    var inputJudge = $this.children().find('input').val();
    if (!errJudge && inputJudge) {
      return true;
    } else {
      return false;
    }
  };

  $('.form_block1 dd.must input').on('blur mouseup keyup', function() {
    $formRequired.map(function() {
      // QUESTION : 関数の引数にセレクタを渡すことができるのか？
      // TODO : .mapメソッドの動きの確認
      if ( judge($(this)) ) {
        $(this).addClass('complete');
        console.log($(this));
      }
    });

    cntComplete = counting();
    cntRemaining = initialCntRequired - cntComplete;
    console.log("残り必須入力項目数" + cntRemaining);
  });
});

/*
jQuery on() イベントの種類

blur    要素がフォーカスを失った時に発生
mouseup 要素上でマウスが押され、上がった時に発生
change  要素がフォーカスを得て値の修正が完了した時に発生
keyup   キーが上がった時に発生
*/