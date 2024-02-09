const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

class App {
  #map;
  #mapEvent;
  constructor() {
    this._getPosition();

    form.addEventListener("submit", this._newWorkout.bind(this));
    inputType.addEventListener ('change', this._toggleElevationFiels);

  }
  _getPosition() {
    navigator.geolocation.getCurrentPosition(
      this._loadMap.bind(this),
      function () {
        console.log("could not fetch location");
      }
    );
  }

  _loadMap(pos) {
    const { latitude } = pos.coords;
    const { longitude } = pos.coords;
    console.log('latitide', latitude)
    console.log('longitude', longitude)
    console.log(`https://www.google.co.in/maps/@${latitude},${longitude}`);
    this.#map = L.map("map").setView([latitude, longitude], 15);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on("click", this._showForm.bind(this));
  }

  _showForm(e) {
    this.#mapEvent = e;
    form.classList.remove("hidden");
    inputDistance.focus();

    
  }

  _toggleElevationFiels() {
      inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
      inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
    
  }

  _newWorkout(e) {
      e.preventDefault();
      inputCadence.value =
      inputDistance.value =
      inputDuration.value =
      inputElevation.value =
      "";
      const { lat, lng } = this.#mapEvent.latlng;
      alert(lat+"-"+lng)
      L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(
          L.popup({
              maxWidth: 200,
              minWidth: 250,
              autoClose: false,
              closeOnClick: false,
              className: "running-popup",
            })
            )
      .setPopupContent("hi")
      .openPopup();
  }
}

const app = new App();
