import { Todo } from './todo.interface';
import { TodoService } from './todo.service';
export declare class TodoController {
    private readonly todoService;
    private readonly logger;
    constructor(todoService: TodoService);
    create(todo: Todo): void;
    findAll(): Todo[];
    findOne(id: number): Todo;
}
