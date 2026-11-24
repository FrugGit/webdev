from flask import Flask

app = Flask(__name__)


@app.route("/prime_number/<int:number>")
def isPrime(number):
    if number < 2:
        return {"Number": number, "isPrime": False}
    else:
        for i in range(2, number):
            if number % i == 0:
                return {"Number": number, "isPrime": False}
    return {"Number": number, "isPrime": True}


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=3000, use_reloader=True)
