package routes

import (
	"todoapp/handlers"

	"github.com/gorilla/mux"
)

func SetupRoutes() *mux.Router {
    router := mux.NewRouter()

    router.HandleFunc("/todos", handlers.GetTodosHandler).Methods("GET")
    router.HandleFunc("/todos", handlers.CreateTodoHandler).Methods("POST")
    router.HandleFunc("/todos/{id:[0-9]+}", handlers.GetTodoHandler).Methods("GET")
    router.HandleFunc("/todos/{id:[0-9]+}", handlers.UpdateTodoHandler).Methods("PUT")
    router.HandleFunc("/todos/{id:[0-9]+}", handlers.DeleteTodoHandler).Methods("DELETE")

    return router
}
