from pathlib import Path
import json


def load_placeholder(model_name: str = "xgboost"):
    path = Path(__file__).resolve().parents[1] / "models" / f"{model_name}_placeholder.json"
    if path.exists():
        return json.loads(path.read_text())
    return {"model": model_name, "status": "missing"}


def predict(payload: dict):
    # Very small placeholder: always returns 'ham'
    return {"prediction": "ham", "score": 0.01, "input_size": len(str(payload))}
