"use strict";
export function pointInTheResultChecker(aaa) {
  let decimalNumberResult = aaa;

  let placeOfDecimalPointResult;
  let digitsAfterTheDecimalPointResult = new Array();
  let digitsBeforeTheDecimalPointResult = new Array();
  //**********************ondalık sayının rakamlarını ayrı ayır böl*********** */
  const arrayOfTheNumbersResult = decimalNumberResult.split("");
  //**********************ondalık sayının rakamlarını ayrı ayrı bölümünde öge sayını bul*********** */
  const lengthOfTheArrayOfTheNumberResult = arrayOfTheNumbersResult.length;
  //****************noktanın olup olmadığını kontrol et*********************************************** */
  const redundantDecimalPointCheckerResult = (element) => element === ".";
  if (arrayOfTheNumbersResult.some(redundantDecimalPointCheckerResult)) {
    //************nokta varsa, noktanın en sonda olup olmadığını kontrol et******************************** */

    //*****************noktanın yerini belirle */
    placeOfDecimalPointResult = arrayOfTheNumbersResult.findIndex(
      redundantDecimalPointCheckerResult
    );

    //**************noktadan önceki sayılar************************************************************************************************ */
    digitsBeforeTheDecimalPointResult = arrayOfTheNumbersResult.slice(
      0,
      placeOfDecimalPointResult
    );

    console.log(digitsBeforeTheDecimalPointResult);
    //**************noktadan sonra sayı olup olmadığını kontrol et**************************************************** */
    digitsAfterTheDecimalPointResult = arrayOfTheNumbersResult.slice(
      placeOfDecimalPointResult + 1,
      lengthOfTheArrayOfTheNumberResult
    );

    console.log(digitsAfterTheDecimalPointResult);

    //***************************noktadan sonra sayı yoksa, noktayı kes, geri kalanı birleştir ve number_1 olarak kaydet ve göster */
    if (digitsAfterTheDecimalPointResult.length == 0) {
      digitsBeforeTheDecimalPointResult = arrayOfTheNumbersResult.slice(
        0,
        lengthOfTheArrayOfTheNumberResult - 1
      );
      digitsBeforeTheDecimalPointResult = digitsBeforeTheDecimalPointResult;
      numberProducerObject.numberResult = digitsBeforeTheDecimalPointResult;
      document.getElementById("displayer2").innerHTML =
        numberProducerObject.numberResult;
    } else {
      const numbersOtherThanZeroResult = (element) => element !== "0";

      if (digitsAfterTheDecimalPointResult.some(numbersOtherThanZeroResult)) {
        const arrayOfTheNonZeroNumrse = [];
        for (let i = 0; i < digitsAfterTheDecimalPointResult.length; i++) {
          if (digitsAfterTheDecimalPointResult[i] != "0") {
            // console.log(i, digitsAfterTheDecimalPointResult[i], " sıfır değil");
            arrayOfTheNonZeroNumrse.push(i);
            // console.log(sifirOlmayanSayilarinArrayi, " bunlar sifir olmayan sayılar");
          }
        }
        //************************sıfır olmayan sayıların array uzunluğunu belirle************************ */
        const uzunluk = arrayOfTheNonZeroNumrse.length;
        // console.log(uzunluk);

        //**************************************sıfır olmayan sayıların array'indeki son ögenin indexi bize indexten sonrasını sileceğimizi gösterir */
        const placeOfTheLastNumberOtherThanZero =
          arrayOfTheNonZeroNumrse[uzunluk - 1];
        // console.log(
        //   placeOfTheLastNumberOtherThanZero,
        //   " burası sıfırdan farklı sayıdan sonraki sıfır sayısını gösteriyor"
        // );
        //***********************sıfır olan sayıları tespit et */
        let numbersWhichAreZero = digitsAfterTheDecimalPointResult.slice(
          placeOfTheLastNumberOtherThanZero + 1,
          digitsAfterTheDecimalPointResult.length
        );

        //*******************noktadan sonraki sıfır olan sayılara kadarki sıfır olmayan sayıları tespit et***** */
        const sifiraKadarOlanSayilar = digitsAfterTheDecimalPointResult.slice(
          0,
          placeOfTheLastNumberOtherThanZero + 1
        );

        //**************sıfıra kadar olan sayıların virgülsüz birleştirilmiş hali *************************** */
        let sifiraKadarOlanSayilarinBirlesikHali =
          sifiraKadarOlanSayilar.join("");
        console.log(sifiraKadarOlanSayilarinBirlesikHali);
        //*************************************sonsayıyı oluşturmak için noktadan önceki ve sonraki syıları birleştir******* */
        if (sifiraKadarOlanSayilar.length != 0) {
          const sonSayi = digitsBeforeTheDecimalPointResult.concat(
            ".",
            sifiraKadarOlanSayilarinBirlesikHali
          );

          aaa = sonSayi.join("");
          return aaa;
        }
      } else {
        //sayıların heopsi sıfır ise, noktayı ve sıfırları kes ve sadece tam sayıyı göster

        digitsBeforeTheDecimalPointResult = arrayOfTheNumbersResult.slice(
          0,
          lengthOfTheArrayOfTheNumberResult -
            digitsAfterTheDecimalPointResult.length -
            1
        );

        aaa = digitsBeforeTheDecimalPointResult.join("");
        return aaa; //RETURN Ü EKLEDİKTEN SONRA MODULE ÇALIŞTI
      }
    }
  }
}
