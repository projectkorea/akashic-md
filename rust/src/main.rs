#[macro_use] extern crate rocket;

use rocket::serde::{Serialize, Deserialize, json::Json};
use rocket_contrib::serve::StaticFiles;
use std::sync::Mutex;

#[derive(Debug, Serialize, Deserialize, Clone)]
struct Todo {
    id: String,
    text: String,
    status: String,  // pending or finished
}

struct TodoState {
    pending: Mutex<Vec<Todo>>,
    finished: Mutex<Vec<Todo>>,
}

#[get("/")]
fn index() -> &'static str {
    "Todo App is running!"
}

#[post("/add", format = "application/json", data = "<todo>")]
fn add(todo: Json<Todo>, state: &rocket::State<TodoState>) {
    let mut pending = state.pending.lock().unwrap();
    pending.push(todo.into_inner());
}

#[delete("/delete/<id>")]
fn delete(id: String, state: &rocket::State<TodoState>) {
    let mut pending = state.pending.lock().unwrap();
    pending.retain(|t| t.id != id);
}

#[launch]
fn rocket() -> _ {
    rocket::build()
        .mount("/", routes![index, add, delete])
        .mount("/static", StaticFiles::from("./static"))
        .manage(TodoState {
            pending: Mutex::new(vec![]),
            finished: Mutex::new(vec![]),
        })
}
