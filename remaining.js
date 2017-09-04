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
*/

jQuery(function($) {
  function isEntered($item) {
    var $itemValue = $item.children().val();

    if ($itemValue != "") {
      return true;
    } else {
      return false;
    }
  }

  function inValid($item, type) {
    
  }

  var $required_items = $('.form1 dd.must');

  $required_items.on('mouseup keyup change', function() {
    var notEnteredItemsCount = $required_items.filter(function() {
      var $item = $(this);
      return !inValid($item) && isEntered($item);
    }).length;
  });
});


