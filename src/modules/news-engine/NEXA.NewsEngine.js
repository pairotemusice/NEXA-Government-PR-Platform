/**
 * ============================================================
 * NEXA Government PR Platform
 * News Intelligence Engine
 *
 * File: NEXA.NewsEngine.js
 * Version: 0.1.0-alpha
 * ============================================================
 */


class NEXANewsEngine {


  constructor(options = {}){

    this.name =
      "NEXA News Intelligence Engine";


    this.version =
      "0.1.0-alpha";


    this.logger =
      options.logger || null;


  }



  analyze(newsText){


    const result = {


      inputLength:
      newsText.length,


      fiveWOneH: {

        who:
        this.checkKeyword(
          newsText,
          ["นาย","นาง","หน่วยงาน","จังหวัด"]
        ),


        what:
        this.checkKeyword(
          newsText,
          ["จัด","ดำเนิน","ประชุม","โครงการ"]
        ),


        when:
        this.checkKeyword(
          newsText,
          ["วันที่","วันนี้","เวลา"]
        ),


        where:
        this.checkKeyword(
          newsText,
          ["ณ","จังหวัด","อำเภอ"]
        ),


        why:
        this.checkKeyword(
          newsText,
          ["เพื่อ","เนื่องจาก","ตาม"]
        ),


        how:
        this.checkKeyword(
          newsText,
          ["โดย","ผ่าน","ดำเนินการ"]
        )

      },


      score:
      this.calculateScore(newsText)


    };


    if(this.logger){

      this.logger.info(
        "News Analysis Completed",
        result
      );

    }


    return result;

  }




  checkKeyword(text, keywords){


    return keywords.some(
      keyword =>
      text.includes(keyword)
    );

  }





  calculateScore(text){


    let score = 0;


    if(text.length > 100)
      score += 20;


    if(text.includes("วันที่"))
      score += 15;


    if(text.includes("จังหวัด"))
      score += 15;


    if(text.includes("จัด"))
      score += 15;


    if(text.includes("เพื่อ"))
      score += 15;


    return score;

  }




  getInfo(){

    return {

      name:
      this.name,

      version:
      this.version

    };

  }


}


export default NEXANewsEngine;