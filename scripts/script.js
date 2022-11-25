const buttonProfile = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('#popup-profile');
const popupProfileCloseIcon = document.querySelector('#popup-profile__close-icon');
const inputPopupName = document.querySelector('#popup-profil__input_name');
const inputPopupProfession = document.querySelector('#popup-profil__input_profession');
const formProfile = document.querySelector('#popup-profile__container');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const buttonPopupSubmit = document.querySelector('#popup-profile__submit-button');
const buttonAddProfile = document.querySelector('.profile__add-button');
const popupMesto = document.querySelector('#popup-mesto');
const popupCloseMesto = document.querySelector('#popup-mesto__close-icon');
const elementsContainer = document.querySelector('.elements');
const elementName = document.querySelector('.element__name');
const elementImage = document.querySelector('.element__image');
const buttonMestoSubmit = document.querySelector('#popup-mesto__submit-button');
const formMesto = document.querySelector('#popup-mesto__container');
const buttonTrash = document.querySelector('.element__trash');
const popupImage = document.querySelector('.popup-image');
const popupCloseImage = document.querySelector('.popup-image__close');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
  {
    name: 'Смоленск',
    link: 'https://images.unsplash.com/photo-1588214736129-c72728bb39f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
  },
  {
    name: 'Санкт-Петербург',
    link: 'https://images.unsplash.com/photo-1655121109751-20a78309dc2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
  }
];

//открытие попапа
function openPopup(popup) {
  popup.classList.add('slowly-open'); //добавляем класс попапу для его медленного окткрытия
  popup.classList.add('popup_opened'); //добавляем класс попапу для его окткрытия
}

// закрытие попапа
function closePopup(popup) {
  popup.classList.remove('slowly-open'); //удаляем класс попапу для медленного открытия
  popup.classList.add('slowly-close'); //добавляем класс попапу для его медленного закрытия

  //удаляем класс popup_opened после окончания slowly-close
  popup.addEventListener('animationend', function () {
    if (popup.classList.contains('slowly-close')) {
      popup.classList.remove('popup_opened'); //удаляем класс попапу для его полного закрытия
      popup.classList.remove('slowly-close'); //удаляем класс попапу для его полного закрытия
    }
  });
}

//открытие попап Профиль
function showPopupProfile() {
  inputPopupName.value = profileName.textContent; //передаем текстовое содержание из имени Профиля в поле ввода попапа
  inputPopupProfession.value = profileProfession.textContent; //передаем текстовое содержание из профессии Профиля в поле попапа

  openPopup(popupProfile); //открытие попапа Профиль
}
buttonProfile.addEventListener('click', showPopupProfile); //обработчик событий по клику для кнопки для редактирования профиля

//закрытие попап Профиль
function slowlyClosePopupProfile() {
  closePopup(popupProfile);
}
popupProfileCloseIcon.addEventListener('click', slowlyClosePopupProfile); //обработчик событий по клику для кнопки закрытия попапа

//редактирование Профиль
function submitProfileForm(evt) {
  evt.preventDefault(); //отменяет стандартную отправку формы.

  profileName.textContent = inputPopupName.value; //передаем данные из поля ввода попапа в имя профиля
  profileProfession.textContent = inputPopupProfession.value; //передаем данные из поля ввода попапа в профессию профиля

  slowlyClosePopupProfile(); //закрытие попапа
}
formProfile.addEventListener('submit', submitProfileForm); //обработчик событий по submit для формы профиля
// (срабатывает при клике по кнопке у которой type=submit)

//открытие попап Место
function showPopupMesto() {
  openPopup(popupMesto);
}
buttonAddProfile.addEventListener('click', showPopupMesto); //обработчик событий по клику для кнопки для открытия попапа Место

//закрытие попап Место
function slowlyClosePopupMesto() {
  closePopup(popupMesto);
}
popupCloseMesto.addEventListener('click', slowlyClosePopupMesto); //обработчик событий по клику для кнопки закрытия попапа Место

// функция закрытия попапа Место-картинка
function closePopupImege(popup) {
  popup.classList.remove('slowly-open'); //удаляем класс попапу для медленного открытия
  popup.classList.add('slowly-close'); //добавляем класс попапу для его медленного закрытия

  //удаляем класс popup_opened после окончания slowly-close
  popup.addEventListener('animationend', function () {
    if (popup.classList.contains('slowly-close')) {
      popup.classList.remove('popup-image_opened'); //удаляем класс попапу для его полного закрытия
      popup.classList.remove('slowly-close'); //удаляем класс попапу для его полного закрытия
    }
  });
}

//закрытие попапа Место-картинка
function slowlyClosePopupMestoPicture() {
  closePopupImege(popupImage);
}
popupCloseImage.addEventListener('click', slowlyClosePopupMestoPicture); //обработчик событий по клику для кнопки закрытия попапа Место-картинка

//функция добавления карточки Место
function addMesto(card, container) {
  container.prepend(card);
}

//функция создания карточки Место
function createMesto(card) {
  const elementTemplate = document.querySelector('#element-template').content; //получение template
  const elementMesto = elementTemplate.querySelector('.element').cloneNode(true); // клонируем  html-блок с классом element в переменную

  elementMesto.querySelector('.element__name').textContent = card.name; //устанавливаем клонированному элементу Имя из параметра функции
  elementMesto.querySelector('.element__image').src = card.link; //устанавливаем клонированному элементу сыылку из параметра функции

  //лайк картинке Место
  elementMesto.querySelector('.element__like').addEventListener('click', function (evt) { //обработчик событий по клику по лайку
    evt.target.classList.toggle('element__like_active'); //Метод toggle работает как add, если у элемента класс отсутствует,
    // и как remove — если присутствует. То есть метод переключает класс у элемента
  });
  //удаление элемента Место
  elementMesto.querySelector('.element__trash').addEventListener('click', function (evt) { //обработчик событий по клику по мусорке
    const listElementsContainer = evt.target.closest('.element'); //получение ближайшего родителя с классом еlement
    listElementsContainer.remove(); //удаляем весь блок полученный выше
  });
  //открытие попапа Место-картинка
  elementMesto.querySelector('.element__image').addEventListener('click', function (evt) { //обработчик событий по клику по картинке
    // Получение ссылки на картинку
    const elementImage = evt.target; //получаем элемент, по которому кликнули
    const link = elementImage.src; //получаем ссылку на картинку
    //Получение названия на картинку
    const parent = evt.target.closest('.element'); //получение ближайшего родителя с классом еlement
    const name = parent.querySelector('.element__name').textContent; //из родителя elevent получаем доспуп к Имени
    //Передача данных в попап
    const inputImagePicture = document.querySelector('.popup-image__picture'); //получаем Ссылку на картинку
    const inputImageName = document.querySelector('.popup-image__name'); // получаеи Имя картинки
    inputImageName.textContent = name; //передаем Имя в попап
    inputImagePicture.src = link; //передаем Сыылку в попап
    //открытие попапа
    popupImage.classList.add('popup-image_opened'); //открываем попап
    popupImage.classList.add('slowly-open'); //добавляем класс попапу для его медленного окткрытия
  });

  return elementMesto; //возвращает объект Место
}

//редактирование карточки Место
function submitMestoForm(evt) {
  evt.preventDefault(); //отменяет стандартную отправку формы.

  const title = document.querySelector('#popup-mesto__input_title'); //получаем название из попапа Место
  const link = document.querySelector('#popup-mesto__input_link'); //получаем ссылкуе из попапа Место
  const newCardInfo = { name: title.value, link: link.value };


  const newCard = createMesto(newCardInfo);//добавляем карточку или так addMesto({name: title.value, link: link.value});
  addMesto(newCard, elementsContainer);

  slowlyClosePopupMesto(); //закрываем попап Место

  title.value = ''; //обнуляем название в попапе
  link.value = ''; //обнуляем ссылку в попапе
}
formMesto.addEventListener('submit', submitMestoForm); //обработчик событий по submit для формы попапа Место
                                                      // (срабатывает при клике по кнопке у которой type=submit)

//добовляем карточки из массива объекотов
initialCards.forEach(function (cardInfo) {
  const newCard = createMesto(cardInfo);
  addMesto(newCard, elementsContainer);
});
