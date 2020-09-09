/* eslint-disable default-case */
const mangXucXac = [{
    ma: 1,
    hinhAnh: "./img/1.png"
}, {
    ma: 2,
    hinhAnh: "./img/2.png"
}, {
    ma: 3,
    hinhAnh: "./img/3.png"
}, {
    ma: 4,
    hinhAnh: "./img/4.png"
}, {
    ma: 5,
    hinhAnh: "./img/5.png"
}, {
    ma: 6,
    hinhAnh: "./img/6.png"
}]
const stateDefault = {
    banChon: true,
    soBanThang: 0,
    tongBanChoi: 0,
    mangXucXac: [
        {
            ma: 1,
            hinhAnh: "./img/1.png",
        },
        {
            ma: 3,
            hinhAnh: "./img/3.png",
        },
        {
            ma: 4,
            hinhAnh: "./img/4.png",
        }
    ],
    tongDiem: 0
}

export const xucXacReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "SET_BAN_CHON": {
            let banChonNew = (action.status ? true : false);
            state.banChon = banChonNew;
            return { ...state }
        }
        case "PLAY_GAME": {
            let mangXucXacMoi = [];
            let tongSoNutRandom = 0;
            for (let i = 0; i < 3; i++) {
                let randomNumber = Math.floor((Math.random() * 6));
                let xucXacNgauNhien = mangXucXac[randomNumber];
                mangXucXacMoi.push(xucXacNgauNhien);
                tongSoNutRandom += randomNumber + 1;
            }
            // có thể tính điểm xúc xắc bằng hàm reduce
            // let tongSoNutRandom = mangXucXacMoi.reduce((tongDiem, xxnn, index) => {
            //     return tongDiem += xxnn.ma;
            // }, 0)
            state.mangXucXac = mangXucXacMoi;
            let diemChuan = 9
            if (state.banChon === true && tongSoNutRandom > diemChuan) {
                state.soBanThang += 1;
            } else if (state.banChon === false && tongSoNutRandom <= diemChuan) {
                state.soBanThang += 1;
            }
            state.tongBanChoi += 1
            state.tongDiem = tongSoNutRandom
            return { ...state }
        }
    }
    return { ...state }
}