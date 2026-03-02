from fastapi import FastAPI
import sys
from pathlib import Path

# Add the spam-detection-guide/src folder to sys.path so we can import the predictor
src_path = Path(__file__).resolve().parents[1] / "src"
if str(src_path) not in sys.path:
    sys.path.insert(0, str(src_path))

from inference.predictor import predict as local_predict

app = FastAPI()


@app.get("/")
def health():
    return {"status": "ok"}


@app.post("/predict")
def predict(payload: dict):
    return local_predict(payload)