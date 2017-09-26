/*
1. 必須入力の項目すべてを選択する
2. 項目に変化があるたびにイベントを発火
3. 項目のリストの内入力済みのものをfilterで除いていく
4. 除かれていないもの＝未入力、なので、リストの長さを数える

== jQuery on() イベントの種類 ==
blur    要素がフォーカスを失った時に発生
mouseup 要素上でマウスが押され、上がった時に発生
change  要素がフォーカスを得て値の修正が完了した時に発生
keyup   キーが上がった時に発生


気にしないといけない点 ========================

一項目に複数フォームがある場合

** フォームのタイプ **
textの場合
selectの場合
checkboxの場合
radioの場合
textareaの場合

*/

jQuery(function($) {

  /**
   * 入力値があるがどうかの判定
   * @param  $item | selector
   * @return boolean
   */
  function isEntered($item) {
    var $itemFormType = $item.children();
    // inputだったら)
    if (1 < $itemFormType.find('input').length) {
      
    }
    // Value
    var $itemValue = $itemFormType.val();
    if ($itemValue != "") {
      // 値がある場合
      return true;
    } else {
      // 値がない場合
      return false;
    }
  }

  /**
   * エラー表示がされているかどうかの判定
   * @param  $item | selector
   * @param  $type | input:type
   * @return boolean
   */
  function inValid($item) {
    var $itemValid = $item.find('.err').length;
    if ($itemValid) {
      return true;    // エラーの場合、true
    } else {
      return false;   // エラーがない場合、false
    }

  }

  /**
   * 1項目に複数ある場合の処理
   * @param  $item | selector
   * @return boolean
   */

  // function multiItem() {

  // }


  // 全体の必須項目のセレクタ
  var $required_items = $('.form_block1 dd.must');
  // $required_items.length:全体の必須項目の数
  console.log('必須項目の数：' + $required_items.length);


  $required_items.on('mouseup keyup change', function() {
    var notEnteredItemsCount = $required_items.filter(function() {
      var $item = $(this);
      // 値があって、エラーがないもの
      return isEntered($item) && !inValid($item);
    }).length;
    console.log('入力完了数：' + notEnteredItemsCount);
  });

});
