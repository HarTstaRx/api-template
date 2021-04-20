import { CreateItemRequest, GetItemModelResponse, UpdateItemRequest } from './item.model';

class ItemController {
  #randomId = (): string => Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
  #items = [{
    id: this.#randomId(),
    done: false,
    name: 'tarea de prueba 1',
  }, {
    id: this.#randomId(),
    done: true,
    name: 'tarea de prueba 2',
  }, {
    id: this.#randomId(),
    done: false,
    name: 'tarea de prueba 3',
  }];

  getAll = (): GetItemModelResponse[] => {
    return this.#items;
  };

  getOne = (id: string): GetItemModelResponse | undefined => {
    return this.#items.find((item) => item.id === id);
  };

  create = (newItem: CreateItemRequest): string => {
    const newId = this.#randomId();
    this.#items.push({
      ...newItem,
      id: newId,
    });

    return newId;
  };

  update = (newItem: UpdateItemRequest): void => {
    this.#items = this.#items.map((item) => {
      if (item.id !== newItem.id) return item;
      return { ...item, ...newItem };
    });
  };

  delete = (id: string): void => {
    this.#items = this.#items.filter((item) => item.id !== id);
  };
}

const itemController = new ItemController();
export default itemController;
