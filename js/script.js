var isStorageSupport = true;

var user_loged_in = document.querySelectorAll(".user-loged-in");
var user_loged_out = document.querySelectorAll(".user-loged-out");

var modal_write_us = document.querySelector(".modal-write-us");
var write_us_form = modal_write_us.querySelector("form");
var input_user_name = modal_write_us.querySelector([".user-name"]);
var input_user_email = modal_write_us.querySelector([".user-email"]);
var input_user_message = modal_write_us.querySelector([".letter-text textarea"]);
var write_us_close = modal_write_us.querySelector(".modal-close");

var shopping_cart = document.querySelector(".shopping-cart");
var favorites = document.querySelector(".favorites");

var modal_map = document.querySelector(".modal-map");
var map_close = modal_map.querySelector(".modal-close");

var modal_ok = document.querySelector(".modal-adding-ok");
var ok_close = modal_ok.querySelector(".modal-close");

var button_login = document.querySelector(".button-login");
var button_logout = document.querySelector(".button-exit");
var button_got_lost = document.querySelector(".button-got-lost");
var index_contacts_link = document.querySelector(".index-contacts a");

var button_buy = document.querySelectorAll(".button-buy");
var button_add_to_favorites = document.querySelectorAll(".button-add-to-favorites");

var arrow_left = document.querySelector(".slider .arrow-left");
var arrow_right = document.querySelector(".slider .arrow-right");
var radio_button = document.querySelectorAll(".slider input[type=radio]");


try {

  var lstorage_username = localStorage.getItem("user-name");
  var lstorage_useremail = localStorage.getItem("user-email");
  var lstorage_usermessage = localStorage.getItem("user-message");

} catch (err) {
    isStorageSupport = false;
}

// пользовательское меню
button_login.addEventListener("click", function(evt) {
	evt.preventDefault();

  for(i = 0; i < user_loged_in.length; i++) {
  	user_loged_in.item(i).classList.remove("user-navigation-hide");
  	
  }

  for(i = 0; i < user_loged_out.length; i++) {
    user_loged_out.item(i).classList.add("user-navigation-hide");
  }
});

button_logout.addEventListener("click", function(evt) {
	evt.preventDefault(i);

  for(i = 0; i < user_loged_in.length; i++) {
    user_loged_in.item(i).classList.add("user-navigation-hide");
    
  }

  for(i = 0; i < user_loged_out.length; i++) {
    user_loged_out.item(i).classList.remove("user-navigation-hide");
  }
});

//слайдер стрелки влево, вправо
try {
    arrow_left.addEventListener("click", function(evt) {
      evt.preventDefault();
      console.log("нажате левая стерлка")
      for (i = 0; i < radio_button.length; i++) {

        if(radio_button.item(i).checked){
          console.log("чекнутый радиобаттон", i)
          if(i === 0) {
            console.log("чекнутый радиобаттон", i)
            break;
          } else {
            radio_button.item(i-1).checked = true;
            radio_button.item(i).checked = false;
            break;
          }
        }

      }
      
    });

    arrow_right.addEventListener("click", function(evt) {
      evt.preventDefault();

      for (i = 0; i < radio_button.length; i++) {

        if(radio_button.item(i).checked){
          console.log("перед условием i=", i, "radio_button.length=", radio_button.length);
          if(i === (radio_button.length-1)) {
            break;
          } else {
            radio_button.item(i + 1).checked = true;
            radio_button.item(i).checked = false;
            break;
          }
        }
      }
    });

} catch (err) {

}


// товар добавлен в корзину, подсветка пунктов в шапке
for (i = 0; i < button_buy.length; i++) {

  button_buy.item(i).addEventListener("click", function(evt) {
    evt.preventDefault();
    modal_ok.classList.add("modal-show");
    shopping_cart.classList.add("goods-in-cart");
  });;

}  

for (i = 0; i < button_add_to_favorites.length; i++) {
  console.log();
  button_add_to_favorites.item(i).addEventListener("click", function(evt) {
    console.log("нажата клавиша В ЗАКЛАДКИ");
    evt.preventDefault();
    favorites.classList.add("favorites-not-empty");
  });

}
// переключение слайдов стрелочками


// Заблудились? открывает форму отправки
if (button_got_lost) {
  button_got_lost.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal_write_us.classList.add("modal-show");
    input_user_name.focus();

    if(lstorage_username) {
    	input_user_name.value = lstorage_username;
    	input_user_email.focus();
    }

    if(lstorage_useremail) {
    	input_user_email.value = lstorage_useremail;
    	input_user_message.focus();
    }

  });
}

write_us_form.addEventListener("submit", function(evt) {

	if (!input_user_name.value || !input_user_email.value || !input_user_message.value) {
		evt.preventDefault();
    write_us_form.classList.add("modal-error");
 		console.log("Нужно ввести данные");
	} else {

		if (isStorageSupport) {
			localStorage.setItem("user-name", input_user_name.value);
			localStorage.setItem("user-email", input_user_email.value);
			localStorage.setItem("user-message", input_user_message.value);
		}
	}
});

write_us_close.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal_write_us.classList.remove("modal-show");
  write_us_form.classList.remove("modal-error");
});


// открывает карту
if (index_contacts_link) {
  index_contacts_link.addEventListener("click", function(evt) {
  	evt.preventDefault();
    modal_map.classList.add("modal-show");
  });
}

// закрытие всплывающих окон
map_close.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal_map.classList.remove("modal-show");
});

ok_close.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal_ok.classList.remove("modal-show");
});

document.addEventListener("keydown", function(evt) {

  if (evt.keyCode === 27) {

    if (modal_write_us.classList.contains("modal-show")) {
      evt.preventDefault();
      modal_write_us.classList.remove("modal-show");
      write_us_form.classList.remove("modal-error");
    }

    if (modal_map.classList.contains("modal-show")) {
      evt.preventDefault();
      modal_map.classList.remove("modal-show");
    }

    if (modal_ok.classList.contains("modal-show")) {
      evt.preventDefault();
      modal_ok.classList.remove("modal-show");
    }

  }
});

