package models

type Todo struct {
	ID    int    `json:"id"`
	Title string `json:"title"`
	Done  bool   `json:"done"`
}

var Todos []Todo
var NextID = 1

func CreateTodo(title string) Todo {
	todo := Todo{ID: NextID, Title: title, Done: false}
	Todos = append(Todos, todo)
	NextID++
	return todo
}

func GetAllTodos() []Todo {
	return Todos
}

func GetTodoByID(id int) (Todo, bool) {
	for _, t := range Todos {
		if t.ID == id {
			return t, true
		}
	}
	return Todo{}, false
}

func UpdateTodoByID(id int, title string, done bool) (Todo, bool) {
	for i, t := range Todos {
		if t.ID == id {
			Todos[i].Title = title
			Todos[i].Done = done
			return Todos[i], true
		}
	}
	return Todo{}, false
}

func DeleteTodoByID(id int) bool {
	for i, t := range Todos {
		if t.ID == id {
			Todos = append(Todos[:i], Todos[i+1:]...)
			return true
		}
	}
	return false
}
