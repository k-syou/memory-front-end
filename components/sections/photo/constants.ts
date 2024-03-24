type photoImage = {
    path: string;
    num: string;
    team: string;
  };

const teamList = ["A팀", "B팀"];
const A_numArr = [
  "0692",
  "0705",
  "0708",
  "0715",
  "0737",
  "0748",
  "0763",
  "0780",
  "0817",
  "0822",
  "0837",
  "0846",
  "0864",
  "0883",
  "0897",
];
const B_numArr = [
  "1707",
  "1732",
  "1740",
  "1754",
  "1766",
  "1775",
  "1799",
  "1807",
  "1828",
  "1831",
  "1879",
  "1883",
  "1905",
  "1935",
  "1948",
  "1998",
  "2012",
  "2070",
  "2082"
]
const teamNumArr = [A_numArr, B_numArr]
const photoData:Array<photoImage> = []
for (let i = 0; i < teamList.length; i++) {
    for (let j=0; j < teamNumArr[i].length; j++) {
        photoData.push({
            path: `/images/${teamList[i]}/SSN_${teamNumArr[i][j]}.jpg`,
            num: teamNumArr[i][j],
            team: teamList[i],
        })
    }
}

export default photoData;