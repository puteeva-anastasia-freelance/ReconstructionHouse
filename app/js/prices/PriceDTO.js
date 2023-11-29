'use strict';

/**
 * Этот класс будет хранить в себе информацию о ценах
 */
class PriceDTO {
	/**
	 * @param {number} id уникальный идентификатор 
	 * @param {string} areaChange площадь изменений
	 * @param {number} priceMin минимальная стоимость проекта
	 */
	constructor(id, areaChange, priceMin) {
		this.id = id;
		this.areaChange = areaChange;
		this.priceMin = priceMin;
	}
}