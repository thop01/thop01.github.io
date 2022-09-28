const b = document.querySelector("#behaald");
const m = document.querySelector("#max");
const x = document.querySelector("#start-cijfer");
const btn = document.querySelector(".calculate");
const r = document.querySelector(".result");
const rList = document.querySelector(".result-list");

document.getElementById("grades").onsubmit = function() {generateGrade()
    return false;};

function generateGrade() {

        const bb = Number(b.value);
        const mm = Number(m.value);
        const xx = Number(x.value);
        const rr = bb / mm * (10 - xx) + xx;
        r.textContent = rr.toFixed(1);

        rList.innerHTML = ` 
                        <thead>
                            <tr>
                                <th>Punten</th>
                                <th>Cijfer</th>
                            </tr>
                        </thead>`;
        for (let i = 0; i <= mm; i++) {
            rList.innerHTML += ` <tr>
                                    <td>${i}</td>
                                    <td>${(i / mm * (10 - xx) + xx).toFixed(1)}</td>
                                </tr>`;
        }
}
