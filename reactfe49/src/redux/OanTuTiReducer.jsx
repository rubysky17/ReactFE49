const stateDefault = {
    hinhAnh: {
        may: "./img/oantutiGame/keo.png",
        nguoiChoi: "./img/oantutiGame/keo.png",
    },
    giaTri: null,   // bao là 1 , kéo là 0 , búa là 2
    text: "",
    soBanThang: 0,
    soBanChoi: 0,
}
export const oanTuTiReducer = (state = stateDefault, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case "CHON_GIA_TRI": {
            if (action.status === "bao") {
                state.hinhAnh.nguoiChoi = './img/oantutiGame/bao.png';
                state.giaTri = 1
            }
            else if (action.status === "keo") {
                state.hinhAnh.nguoiChoi = './img/oantutiGame/keo.png'
                state.giaTri = 0
            } else {
                state.hinhAnh.nguoiChoi = './img/oantutiGame/bua.png';
                state.giaTri = 2
            }
            return { ...state }
        }
        case "PLAY_GAME": {
            let randomGiaTri = Math.floor(Math.random() * 3);
            if (state.giaTri === null) {
                alert("Chọn đi mà, không chọn sao bắt đầu được");
            } else {
                if (randomGiaTri === 0) {
                    state.hinhAnh.may = "./img/oantutiGame/keo.png";
                    if (state.giaTri === 1) {
                        state.text = "Thua sml, huhu";
                    } else if (state.giaTri === 2) {
                        state.soBanThang += 1;
                        state.text = "Thanos, tuổi tôm";
                    } else if (state.giaTri === 0) {
                        state.text = "Hòa rồi nha !";
                    }
                } else if (randomGiaTri === 1) {
                    state.hinhAnh.may = "./img/oantutiGame/bao.png"
                    if (state.giaTri === 1) {
                        state.text = "Hòa rồi nha !";
                    } else if (state.giaTri === 2) {
                        state.text = "Thua sml, huhu";
                    } else if (state.giaTri === 0) {
                        state.soBanThang += 1;
                        state.text = "Thanos, tuổi tôm";
                    }
                } else if (randomGiaTri === 2) {
                    state.hinhAnh.may = "./img/oantutiGame/bua.png"
                    if (state.giaTri === 1) {
                        state.soBanThang += 1;
                        state.text = "Thanos, tuổi tôm";
                    } else if (state.giaTri === 2) {
                        state.text = "Hòa rồi nha !";
                    } else if (state.giaTri === 0) {
                        state.text = "Thua sml, huhu";
                    }
                }
                state.soBanChoi += 1;
            }
            state.giaTri = null;
            return { ...state }
        }
    }
    return { ...state }
}