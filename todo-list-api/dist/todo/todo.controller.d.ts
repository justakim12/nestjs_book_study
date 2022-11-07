import { Todo } from './todo.interface';
import { TodoService } from './todo.service';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    findAll(): Todo[];
}
