from typing import Union
from fastapi import FastAPI, Request

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello" : "World"}

@app.post("/user")
async def user(req : Request):
    req_body = await req.json()
    return{
        "data" : req_body,
        "answer" : "blob"
    }