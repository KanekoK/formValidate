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

  function isEntered($item) {
    var $itemValue = $item.children().val();
    if ($itemValue != "") {
      // 値がある場合
      return true;
    } else {
      // 値がない場合
      return false;
    }
  }

  function inValid($item, type = 'input') {
    var $itemValid = $item.children().find(type).hasClass('err');
    // エラーの場合、true
    return $itemValid;
  }

  var $required_items = $('.form_block1 dd.must');

  console.log('必須項目の数：' + $required_items.length);

  $required_items.on('mouseup keyup change', function() {
    var notEnteredItemsCount = $required_items.filter(function() {
      var $item = $(this);
      // 値があって、エラーがないもの
      return !inValid($item) && isEntered($item);
    }).length;
    console.log('入力完了数：' + notEnteredItemsCount);
  });

});
