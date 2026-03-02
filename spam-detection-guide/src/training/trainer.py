#!/usr/bin/env python3
import argparse
import json
from pathlib import Path
import time


def main():
    parser = argparse.ArgumentParser(description="Minimal trainer placeholder")
    parser.add_argument("--model", default="xgboost", help="Model to train")
    parser.add_argument("--dataset", default="huggingface_sms", help="Dataset name")
    parser.add_argument("--epochs", type=int, default=1, help="Epochs (placeholder)")
    args = parser.parse_args()

    out_dir = Path(__file__).resolve().parents[1] / "models"
    out_dir.mkdir(parents=True, exist_ok=True)

    print(f"Starting training: model={args.model} dataset={args.dataset} epochs={args.epochs}")
    # Simulate work
    for e in range(args.epochs):
        print(f" Epoch {e+1}/{args.epochs} ...")
        time.sleep(0.5)

    model_info = {
        "model": args.model,
        "dataset": args.dataset,
        "epochs": args.epochs,
        "status": "trained",
    }

    out_file = out_dir / f"{args.model}_placeholder.json"
    out_file.write_text(json.dumps(model_info, indent=2))
    print(f"Saved placeholder model to: {out_file}")


if __name__ == "__main__":
    main()
