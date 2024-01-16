// Challenge Project: Mysterious Organism
// Overview
// This project is slightly different than others you have encountered thus far on Codecademy. Instead of a step-by-step tutorial, this project contains a series of open-ended requirements which describe the project you’ll be building. There are many possible ways to correctly fulfill all of these requirements, and you should expect to use the internet, Codecademy, and other resources when you encounter a problem that you cannot easily solve.

// Project Goals
// Context: You’re part of a research team that has found a new mysterious organism at the bottom of the ocean near hydrothermal vents. Your team names the organism, Pila aequor (P. aequor), and finds that it is only comprised of 15 DNA bases. The small DNA samples and frequency at which it mutates due to the hydrothermal vents make P. aequor an interesting specimen to study. However, P. aequor cannot survive above sea level and locating P. aequor in the deep sea is difficult and expensive. Your job is to create objects that simulate the DNA of P. aequor for your research team to study.

// As you progress through the steps, use the terminal and console.log() statements to check the output of your loops and functions.

// Returns a random DNA base

const returnRandBase = () => {
    const dnaBases = ["A", "T", "C", "G"];
    return dnaBases[Math.floor(Math.random() * 4)];
  };
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase());
    }
    return newStrand;
  };
  
  
  
  
  // let sample = mockUpStrand();
  
  const pAequorFactory = (specimenNum, dna) => {
    return {
      specimenNum,
      dna,
      
      mutate() {
        let newbase = returnRandBase();
        let base = this.dna[Math.floor(Math.random() * this.dna.length)];
        while (newbase === base) {
          newbase = returnRandBase();
        }
        this.dna[this.dna.indexOf(base)] = newbase;
        return this.dna;
      },
  
      compareDNA(pAequor) {
        let comp1 = pAequor.dna;
        let comp2 = this.dna;
        let x = 0;
        let res = []
        for (;x < comp2.length; x++) {
            if(comp1[x] === comp2[x]) {
                res.push(comp1[x])
            }
        }
  
        return `specimen ${this.specimenNum} and specimen ${pAequor.specimenNum} have ${Math.round((res.length/comp2.length) * 100)}% DNA in common`
      },
  
      willLikelySurvive() {
        let count = 0;
        let a = 0;
        for (; a < this.dna.length; a++) {
          if (this.dna[a] === "C" || this.dna[a] === "G") {
            count ++
          }
        }
        let percentage = (count/this.dna.length) * 100;
        console.log(percentage)
        if (percentage >= 60) {
          return true;
        }
        return false;
      },
    };
  };
  
  const specimen1 = pAequorFactory(1, mockUpStrand());
  const specimen2 = pAequorFactory(2, mockUpStrand());
  const specimen3 = pAequorFactory(3, mockUpStrand());
  const specimen4 = pAequorFactory(4, mockUpStrand());
  const specimen5 = pAequorFactory(5, mockUpStrand());
  const specimen6 = pAequorFactory(6, mockUpStrand());
  const specimen7 = pAequorFactory(7, mockUpStrand());
  const specimen8 = pAequorFactory(8, mockUpStrand());
  const specimen9 = pAequorFactory(9, mockUpStrand());
  const specimen10 = pAequorFactory(10, mockUpStrand());
  const specimen11 = pAequorFactory(11, mockUpStrand());
  const specimen12 = pAequorFactory(12, mockUpStrand());
  const specimen13 = pAequorFactory(13, mockUpStrand());
  const specimen14 = pAequorFactory(14, mockUpStrand());
  const specimen15 = pAequorFactory(15, mockUpStrand());
  const specimen16 = pAequorFactory(16, mockUpStrand());
  const specimen17 = pAequorFactory(17, mockUpStrand());
  const specimen18 = pAequorFactory(18, mockUpStrand());
  const specimen19 = pAequorFactory(19, mockUpStrand());
  const specimen20 = pAequorFactory(20, mockUpStrand());
  const specimen21 = pAequorFactory(21, mockUpStrand());
  const specimen22 = pAequorFactory(22, mockUpStrand());
  const specimen23 = pAequorFactory(23, mockUpStrand());
  const specimen24 = pAequorFactory(24, mockUpStrand());
  const specimen25 = pAequorFactory(25, mockUpStrand());
  const specimen26 = pAequorFactory(26, mockUpStrand());
  const specimen27 = pAequorFactory(27, mockUpStrand());
  const specimen28 = pAequorFactory(28, mockUpStrand());
  const specimen29 = pAequorFactory(29, mockUpStrand());
  const specimen30 = pAequorFactory(30, mockUpStrand());
  
  let pp = pAequorFactory(12, [ 'A', 'T', 'A', 'C', 'C']);
  let kpk = pAequorFactory(3, [ 'G', 'C', 'A', 'C', 'A', "C"])
  console.log(kpk.dna)
  
  console.log("\n")
  pp.mutate()
  console.log(pp.dna);
  kpk.mutate()
  console.log(pp.compareDNA(kpk))
  console.log(specimen2.compareDNA(specimen30))
  console.log(specimen20.compareDNA(specimen25))
  console.log(specimen15.dna);
  specimen15.mutate();
  console.log(specimen15.dna);
  

  //
 If you’d like to challenge yourself further, you could consider the following:

// Create a .complementStrand() method to the factory function’s object that returns the complementary DNA strand. The rules are that 'A's match with 'T's and vice versa. Also, 'C's match with 'G's and vice versa. (Check the hint for more details)
// Use the .compareDNA() to find the two most related instances of pAequor.