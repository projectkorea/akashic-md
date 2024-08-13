package handlers

import (
	"encoding/json"
	"net/http"
	"strconv"

	"todoapp/models"

	"github.com/gorilla/mux"
)

func GetTodosHandler(w http.ResponseWriter, r *http.Request) {
    todos := models.GetAllTodos()
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(todos)
}

func CreateTodoHandler(w http.ResponseWriter, r *http.Request) {
    var todo models.Todo
    json.NewDecoder(r.Body).Decode(&todo)
    createdTodo := models.CreateTodo(todo.Title)
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(createdTodo)
}

func GetTodoHandler(w http.ResponseWriter, r *http.Request) {
    vars := mux.Vars(r)
    id, _ := strconv.Atoi(vars["id"])
    todo, found := models.GetTodoByID(id)
    if !found {
        http.NotFound(w, r)
        return
    }
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(todo)
}

func UpdateTodoHandler(w http.ResponseWriter, r *http.Request) {
    vars := mux.Vars(r)
    id, _ := strconv.Atoi(vars["id"])

    var updatedTodo models.Todo
    json.NewDecoder(r.Body).Decode(&updatedTodo)

    todo, found := models.UpdateTodoByID(id, updatedTodo.Title, updatedTodo.Done)
    if !found {
        http.NotFound(w, r)
        return
    }

    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(todo)
}

func DeleteTodoHandler(w http.ResponseWriter, r *http.Request) {
    vars := mux.Vars(r)
    id, _ := strconv.Atoi(vars["id"])

    success := models.DeleteTodoByID(id)
    if !success {
        http.NotFound(w, r)
        return
    }

    w.WriteHeader(http.StatusNoContent)
}
