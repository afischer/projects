// var numPerStudent = c3.generate({
//     bindto: '#numPerStudent',
//     data: {
//       columns: [
//         ['data1', 30, 200, 100, 400, 150, 250],
//         ['data2', 130, 100, 140, 200, 150, 50]
//       ],
//       type: 'bar'
//     },
//   });

var aidAppsChart = c3.generate({
  bindto: '#aidApps',
  data: {
    columns: [
      ['Percent receiving Grant', 88.5, 86.1, 87.2, 90.4, 90.5, 91.1, 91.6, 91.4, 92.3, 91.9],
    ],
    colors: {
      'Percent receiving Grant': '#5d9f7f'
    },
  },
  axis: {
    x: {
      label: {
        text: 'Percent receiving Grant',
        position: 'outer-center'
      },
      type: 'category',
      categories: ['2007-08', '2008-09', '2009-10', '2010-11', '2011-12', '2012-13', '2013-14', '2014-15', '2015-16', '2016-17'],
      tick: {
        rotate: 75,
        multiline: false
      },
      height: 70
    },
    y: {
      label: {
        text: 'Percentage of Applicants',
        position: 'outer-middle'
      }
    }
  }
});

var aidreceiptsChart = c3.generate({
  bindto: '#aidreceipts',
  data: {
    columns: [
      ['Aid Applicant Total', 4473, 4727, 5029, 5060, 5217, 5346, 5383, 5396, 5368, 5165],
      ['Aid Recipient Total', 3959, 4071, 4385, 4576, 4719, 4870, 4933, 4933, 4954, 4749]
    ],
    colors: {
      'Aid Applicant Total': '#5d9f7f',
      'Aid Recipient Total': '#9ebdaa'
    },
  },
  axis: {
    x: {
      label: {
        text: 'Years',
        position: 'outer-center'
      },
      type: 'category',
      categories: ['2007-08', '2008-09', '2009-10', '2010-11', '2011-12', '2012-13', '2013-14', '2014-15', '2015-16', '2016-17'],
      tick: {
        rotate: 75,
        multiline: false
      },
      height: 70
    },
    y: {
      label: {
        text: 'Students',
        position: 'outer-middle'
      }
    }
  }
});

var gradAid = c3.generate({
  bindto: '#gradAid',
  data: {
    columns: [
      ['Job', 845, 2372, 1787, 0, 1962, 1558, 0, 0, 2279, 0, 0, 0, 0, 0, 1393, 1132, 1476, 2178, 919, 1862],
      ['Loan', 46470, 38498, 39870, 66917, 37895, 26905, 50847, 28747, 35423, 20462, 20282, 14622, 15620, 29803, 75862, 34604, 53703, 53950, 17432, 33180],
      ['Grant', 30354, 9506, 10268, 14469, 9877, 7377, 23267, 13507, 3535, 29497, 27201, 34495, 31213, 31760, 24610, 35234, 17593, 8751, 30258, 26618]
    ],
    type: 'bar',
    colors: {
      Grant: '#5d9f7f',
      Loan: '#9ebdaa',
      Job: '#eedfa2'
    },
    groups: [
      ['Job', 'Loan', 'Grant']
    ]
  },
  axis: {
    x: {
      label: {
        text: 'School',
        position: 'outer-center'
      },
      type: 'category',
      categories: ['Grad. Arts & Sci.', 'Grad. Ed.', 'Design', 'Wharton Grad.', 'Social Policy', 'Nursing Grad.', 'Wharton Exec. MBA', 'Social Policy Doc.', 'Exec. Engineering', 'Education Ph. D.', 'Design Ph. D.', 'Wharton Ph. D.', 'Annenberg Ph. D.', 'Engineering Ph. D.', 'Dental', 'Medical', 'Law', 'Veterinary', 'Nursing Ph. D.', 'Bio-Med Eng.'],
      tick: {
        rotate: 75,
        multiline: false
      },
      height: 110
    },
    y: {
      label: {
        text: 'Aid received',
        position: 'outer-middle'
      }
    }
  }
});