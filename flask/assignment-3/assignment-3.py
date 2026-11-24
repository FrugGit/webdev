from flask import Flask, request
import json

app = Flask(__name__)


@app.route("/translate/<string:word>")
def translate(word):
    with open("dictionary.json", "r") as file:
        dictionary = json.load(file)
        translation = dictionary.get(word)
        if translation is None:
            return {"error": "Word not found"}
        return {"word": word, "translation": translation}


@app.route("/add")
def add_word():
    with open("dictionary.json", "r", encoding="utf-8") as file:
        dictionary = json.load(file)
    en = request.args.get("en")
    fi = request.args.get("fi")
    dictionary[en] = fi
    with open("dictionary.json", "w", encoding="utf-8") as file:
        json.dump(dictionary, file, ensure_ascii=False, indent=2)
    return {"word": en, "translation": fi}


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=3000, use_reloader=True)
