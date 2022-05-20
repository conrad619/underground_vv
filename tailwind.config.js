module.exports = {
  mode: 'jit',
  content: [
    './dev/**/*.html',
  ],
  theme: {
    extend: {
      colors:{
        'color':{
          1:'#7BF7F6',
          2:'#91EE9E',
          3:'#A6EC8B',
          4:'#ECDF65',
        }
      }
    },
    screens:{
      'sm':'426px',
      'md':'769px',
      'lg':'1025px',
    },
    fontFamily: {
      'sans' : ['degular', 'Helvetica', 'Arial', 'sans-serif'],
      'serif':['Freeserif'],
      'body': ['degular'],
      'head':['Oswald'],
    },
    fontSize:{
      'd0':['1em', { //16
        lineHeight: '1.5', 
      }],
      'd1':['0.75em', { //12
        lineHeight: '1.5', 
      }],
      'd2':['1.5em', { //24
        lineHeight: '1.5', 
      }],
      'd3':['1.75em', { //28
        lineHeight: '1.5', 
      }],
      'd4':['2.25em', { //36
        lineHeight: '1.5', 
      }],
      'd5':['3em', { //48
        lineHeight: '1.5', 
      }],
    }
  },
  
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
