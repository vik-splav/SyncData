// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod command;
mod file;
use command::splash::close_splashscreen;
use file::readfile::{google_drive_update_metadata, google_drive_upload};
fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_sqlite::init())
        .invoke_handler(tauri::generate_handler![
            close_splashscreen,
            google_drive_upload,
            google_drive_update_metadata
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
