from flask import Flask
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


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=3000, use_reloader=True)
