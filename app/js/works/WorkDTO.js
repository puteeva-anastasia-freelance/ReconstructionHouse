'use strict';

/**
 * Этот класс будет хранить в себе информацию о конкретной работе
 */
class WorkDTO {
	/**
	 * @param {number} id уникальный идентификатор каждой работы
	 * @param {string} name название работы
	 * @param {string} image название файла с картинкой для разрешения >= 768px
	 * @param {string} imageMiddle название файла с картинкой для разрешения >= 450px и < 768px
	 * @param {string} imageSmall название файла с картинкой для разрешения < 450px
	 */
	constructor(id, name, image, imageMiddle, imageSmall) {
		this.id = id;
		this.name = name;
		this.image = image;
		this.imageMiddle = imageMiddle;
		this.imageSmall = imageSmall;
	}
}