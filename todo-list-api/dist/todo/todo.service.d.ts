import { Todo } from './todo.interface';
export declare class TodoService {
    private storage;
    create(todo: Todo): void;
    findAll(): Todo[];
    findOne(id: number): Todo;
    update(id: number, todo: Todo): void;
    remove(id: number): void;
}
