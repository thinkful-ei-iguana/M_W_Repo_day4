'use strict';


console.log('hi hi hi');

function main() {

  function registerSubmitListener() {

    $('#js-shopping-list-form').on('submit', function(e) {
      e.preventDefault();

      let addItem = $('#shopping-list-entry').val();
      console.log("addItem ran?", addItem);


      if (addItem) {

        $('.shopping-list').append(
          `<li>
                        <span class="shopping-item">${addItem}</span>
                        <div class="shopping-item-controls">
                            <button class="shopping-item-toggle">
                                <span class="button-label">check</span>
                            </button>
                            <button class="shopping-item-delete">
                                <span class="button-label">delete</span>
                            </button>
                        </div>
                    </li>`
        );

      };

    });
  }
  registerSubmitListener();


  $('.shopping-list').on('click','.shopping-item-delete', function(e) {
    $(this).closest('li').remove();
  });

  $('.shopping-list').on('click', '.shopping-item-toggle', function(e) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });

}

$((main));

