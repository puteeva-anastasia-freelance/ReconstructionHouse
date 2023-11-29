'use strict';

/**
 * Этот класс будет хранить в себе информацию о конкретной услуге
 */
class ServiceDTO {
	/**
	 * @param {number} id уникальный идентификатор каждой услуги
	 * @param {string} name название услуги
	 * @param {array} benefits список преимуществ
	 * @param {number | null} price минимальная стоимость услуги
	 * @param {string} image название файла с картинкой
	 */
	constructor(id, name, benefits, price, image) {
		this.id = id;
		this.name = name;
		this.benefits = benefits;
		this.price = price;
		this.image = image;
	}
}