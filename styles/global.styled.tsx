import { createGlobalStyle } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    grey: string;
    grey2: string;
    justWhite: string;
    button: string;
    borderButton: string;
    topic: string;
    colorTopic: string;
    borderBottom: string;
    menuModal: string;
    layerModal: string;
    borderField: string;
    scrollBar: string;
    scroll: string;
    modalContent: string;
  }
}

export const GlobalStyles = createGlobalStyle`
:root {
  --baeFont:'Inter', sans-serif;
  --bg-topic: #ddf4ff;
  --primary: #57a6ff; 
  --white: #fffffe; 
  --black: #141414; 
  --grey: #8b949e; 
  --bg: #0d1117; 
  --button: #22262c; 
  --grey-2: #c5ced7; 
  --pink: #cc68a0; 
  --yellow: #f1e05a; 
  --purple: #563d7c; 
  --black-2: #171b21; 
  --headline1: 600 1.625rem/2rem var(--baeFont); 
  --button: 500 0.875rem/1.5rem var(--baeFont); 
  --headline2-semi-bold: 600 1.25rem/1.5rem var(--baeFont);  
  --headline2-ligth: 300 1.25rem/1.5rem var(--baeFont); 
  --body1-regular: 400 1rem/1.5rem var(--baeFont); 
  --body1-semi-bold: 700 1rem/1.5rem var(--baeFont); 
  --body2-regular: 400 0.875rem/1.5rem var(--baeFont); 
  --body2-semi-bold: 600 0.875rem/1.5rem var(--baeFont); 
  --caption-regular: 400 0.75rem/1.125rem var(--baeFont); 
  --caption-medium: 500 0.75rem/1.125rem var(--baeFont); 
}

body::-webkit-scrollbar {
  inline-size: 10px;
  background-color: ${({ theme }) => theme.scrollBar};
}
body::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.scroll};
  border-radius: 10px;
}

body {
  /* color: var( --primary); */
  background-color: ${({ theme }) => theme.body};
  font: var(--body2-regular);
  margin: 0;
  color: ${({ theme }) => theme.justWhite};
  transition: all .3s ease-in-out;
}


* {
  box-sizing: border-box;
}


h1,h2,h3,h4,h5,h6 {
  margin: 0;
}

.btn {
  border: 1px solid transparent;
  text-transform: capitalize;
  padding-inline: 1.5rem;
  padding-block: .25rem;
  border-radius: 0.5rem;
  font: var(--button);
  text-align: center;
  cursor: pointer;
  letter-spacing: 1.17px;

}
.btn:active {
  transform: scale(.98);
}
.is-icon {
  display: flex;
  align-items: center;
  justify-content:center;
  gap: .5rem;
}
.is-icon i {
  font-size: 1.3rem;
}
.is-grey {
  background-color: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.justWhite};
  border-color: ${({ theme }) => theme.borderButton};
}
.is-border {
  border-color: ${({ theme }) => theme.borderField};

}

.btn-float {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  inline-size: 50px;
  block-size: 50px;
  font-size: 1.5rem;
  inset-inline-end: 1rem;
  border: none;
  background-color: ${({ theme }) => theme.menuModal};
  border: 1px solid ${({ theme }) => theme.borderButton};
  border-radius: 50%;
  transition: all 100ms ease-in-out;
  @media screen and (min-width: 768px){
  inset-inline-end: 3.125rem;
  inset-block-end: 3.125rem;
  }
  /* transform: scale(3); */

  &:hover {
    transform: scale(1.2);
  }
    &:active {
    transform: scale(1);
  }
}
.btn-search {
  inset-block-end: 8rem;
}

/* .is-javascript {
background-color: #f1e05a;
}
.is-html {
  background-color: #e34c26;
}
.is-css {
  background-color:#563d7c;
}
.is-typescript {
  background-color: #2b7489;
} */

  .is-mercury {
background-color: #ff2b2b
  }

  .is-typescript {
background-color: #2b7489
  }

  .is-purebasic {
background-color: #5a6986
  }

  .is-objective-cp {
background-color: #6866fb
  }

  .is-self {
background-color: #0579aa
  }

  .is-edn {
background-color: #db5855
  }

  .is-newlisp {
background-color: #87AED7
  }

  .is-jupyter notebook {
background-color: #DA5B0B
  }

  .is-rebol {
background-color: #358a5b
  }
  .is-frege {
background-color: #00cafe
  }

  .is-dart {
background-color: #00B4AB
  }

  .is-aspectj {
background-color: #a957b0
  }

  .is-shell {
background-color: #89e051
  }

  .is-web ontology language {
background-color: #9cc9dd
  }

  .is-xbase {
background-color: #403a40
  }

  .is-eiffel {
background-color: #946d57
  }

  .is-nix {
background-color: #7e7eff
  }

  .is-raml {
background-color: #77d9fb
  }

  .is-mtml {
background-color: #b7e1f4
  }

  .is-racket {
background-color: #22228f
  }

  .is-elixir {
background-color: #6e4a7e
  }

  .is-sas {
background-color: #B34936
  }

  .is-agda {
background-color: #315665
  }

  .is-wisp {
background-color: #7582D1
  }

  .is-d {
background-color: #ba595e
  }

  .is-kotlin {
background-color: #F18E33
  }

  .is-opal {
background-color: #f7ede0
  }

  .is-crystal {
background-color: #776791
  }

  .is-objective-c {
background-color: #438eff
  }

  .is-coldfusion cfc {
background-color: #ed2cd6
  }

  .is-oz {
background-color: #fab738
  }

  .is-mirah {
background-color: #c7a938
  }

  .is-objective-j {
background-color: #ff0c5a
  }

  .is-gosu {
background-color: #82937f
  }

  .is-freemarker {
background-color: #0050b2
  }

  .is-ruby {
background-color: #701516
  }

  .is-component pascal {
background-color: #b0ce4e
  }

  .is-arc {
background-color: #aa2afe
  }

  .is-brainfuck {
background-color: #2F2530
  }

  .is-nit {
background-color: #009917
  }

  .is-apl {
background-color: #5A8164
  }

  .is-go {
background-color: #375eab
  }

  .is-visual basic {
background-color: #945db7
  }

  .is-php {
background-color: #4F5D95
  }

  .is-cirru {
background-color: #ccccff
  }

  .is-sqf {
background-color: #3F3F3F
  }

  .is-glyph {
background-color: #e4cc98
  }

  .is-java {
background-color: #b07219
  }

  .is-maxscript {
background-color: #00a6a6
  }

  .is-scala {
background-color: #DC322F
  }

  .is-makefile {
background-color: #427819
  }

  .is-coldfusion {
background-color: #ed2cd6
  }

  .is-perl {
background-color: #0298c3
  }

  .is-lua {
background-color: #000080
  }

  .is-vue {
background-color: #2c3e50
  }

  .is-verilog {
background-color: #b2b7f8
  }

  .is-factor {
background-color: #636746
  }

  .is-haxe {
background-color: #df7900
  }

  .is-pure data {
background-color: #91de79
  }

  .is-forth {
background-color: #341708
  }

  .is-red {
background-color: #ee0000
  }

  .is-hy {
background-color: #7790B2
  }

  .is-volt {
background-color: #1F1F1F
  }

  .is-lsl {
background-color: #3d9970
  }

  .is-ec {
background-color: #913960
  }

  .is-coffeescript {
background-color: #244776
  }

  .is-html {
background-color: #e44b23
  }

  .is-lex {
background-color: #DBCA00
  }

  .is-api blueprint {
background-color: #2ACCA8
  }

  .is-swift {
background-color: #ffac45
  }

  .is-c {
background-color: #555555
  }

  .is-autohotkey {
background-color: #6594b9
  }

  .is-isabelle {
background-color: #FEFE00
  }

  .is-metal {
background-color: #8f14e9
  }

  .is-clarion {
background-color: #db901e
  }

  .is-jsoniq {
background-color: #40d47e
  }

  .is-boo {
background-color: #d4bec1
  }

  .is-autoit {
background-color: #1C3552
  }

  .is-clojure {
background-color: #db5855
  }

  .is-rust {
background-color: #dea584
  }

  .is-prolog {
background-color: #74283c
  }

  .is-sourcepawn {
background-color: #5c7611
  }

  .is-ampl {
background-color: #E6EFBB
  }

  .is-fortran {
background-color: #4d41b1
  }

  .is-antlr {
background-color: #9DC3FF
  }

  .is-harbour {
background-color: #0e60e3
  }

  .is-tcl {
background-color: #e4cc98
  }

  .is-blitzmax {
background-color: #cd6400
  }

  .is-piglatin {
background-color: #fcd7de
  }

  .is-lasso {
background-color: #999999
  }

  .is-ecl {
background-color: #8a1267
  }

  .is-vhdl {
background-color: #adb2cb
  }

  .is-elm {
background-color: #60B5CC
  }

  .is-propeller spin {
background-color: #7fa2a7
  }

  .is-x10 {
background-color: #4B6BEF
  }

  .is-idl {
background-color: #a3522f
  }

  .is-ats {
background-color: #1ac620
  }

  .is-ada {
background-color: #02f88c
  }

  .is-unity3d asset {
background-color: #ab69a1
  }

  .is-nu {
background-color: #c9df40
  }

  .is-lfe {
background-color: #004200
  }

  .is-supercollider {
background-color: #46390b
  }

  .is-oxygene {
background-color: #cdd0e3
  }

  .is-asp {
background-color: #6a40fd
  }

  .is-assembly {
background-color: #6E4C13
  }

  .is-gnuplot {
background-color: #f0a9f0
  }

  .is-jflex {
background-color: #DBCA00
  }

  .is-netlinx {
background-color: #0aa0ff
  }

  .is-turing {
background-color: #45f715
  }

  .is-vala {
background-color: #fbe5cd
  }

  .is-processing {
background-color: #0096D8
  }

  .is-arduino {
background-color: #bd79d1
  }

  .is-flux {
background-color: #88ccff
  }

  .is-netlogo {
background-color: #ff6375
  }

  .is-c sharp {
background-color: #178600
  }

  .is-css {
background-color: #563d7c
  }

  .is-emacs lisp {
background-color: #c065db
  }

  .is-stan {
background-color: #b2011d
  }

  .is-saltstack {
background-color: #646464
  }

  .is-qml {
background-color: #44a51c
  }

  .is-pike {
background-color: #005390
  }

  .is-lolcode {
background-color: #cc9900
  }

  .is-ooc {
background-color: #b0b77e
  }

  .is-handlebars {
background-color: #01a9d6
  }

  .is-j {
background-color: #9EEDFF
  }

  .is-mask {
background-color: #f97732
  }

  .is-emberscript {
background-color: #FFF4F3
  }

  .is-tex {
background-color: #3D6117
  }

  .is-nemerle {
background-color: #3d3c6e
  }

  .is-krl {
background-color: #28431f
  }

  .is-renpy {
background-color: #ff7f7f
  }

  .is-unified parallel c {
background-color: #4e3617
  }

  .is-golo {
background-color: #88562A
  }

  .is-fancy {
background-color: #7b9db4
  }

  .is-ocaml {
background-color: #3be133
  }

  .is-shen {
background-color: #120F14
  }

  .is-pascal {
background-color: #b0ce4e
  }

  .is-f-sharp {
background-color: #b845fc
  }

  .is-puppet {
background-color: #302B6D
  }

  .is-actionscript {
background-color: #882B0F
  }

  .is-diff {
background-color: #88dddd
  }

  .is-ragel in ruby host {
background-color: #9d5200
  }

  .is-fantom {
background-color: #dbded5
  }

  .is-zephir {
background-color: #118f9e
  }

  .is-click {
background-color: #E4E6F3
  }

  .is-smalltalk {
background-color: #596706
  }

  .is-dm {
background-color: #447265
  }

  .is-ioke {
background-color: #078193
  }

  .is-pogoscript {
background-color: #d80074
  }

  .is-livescript {
background-color: #499886
  }

  .is-javascript {
background-color: #f1e05a
  }

  .is-viml {
background-color: #199f4b
  }

  .is-purescript {
background-color: #1D222D
  }

  .is-abap {
background-color: #E8274B
  }

  .is-matlab {
background-color: #bb92ac
  }

  .is-slash {
background-color: #007eff
  }

  .is-r {
background-color: #198ce7
  }

  .is-erlang {
background-color: #B83998
  }

  .is-pan {
background-color: #cc0000
  }

  .is-lookml {
background-color: #652B81
  }

  .is-eagle {
background-color: #814C05
  }

  .is-scheme {
background-color: #1e4aec
  }

  .is-plsql {
background-color: #dad8d8
  }

  .is-python {
background-color: #3572A5
  }

  .is-max {
background-color: #c4a79c
  }

  .is-common lisp {
background-color: #3fb68b
  }

  .is-latte {
background-color: #A8FF97
  }

  .is-xquery {
background-color: #5232e7
  }

  .is-omgrofl {
background-color: #cabbff
  }

  .is-xc {
background-color: #99DA07
  }

  .is-nimrod {
background-color: #37775b
  }

  .is-systemverilog {
background-color: #DAE1C2
  }

  .is-chapel {
background-color: #8dc63f
  }

  .is-groovy {
background-color: #e69f56
  }

  .is-dylan {
background-color: #6c616e
  }

  .is-e {
background-color: #ccce35
  }

  .is-parrot {
background-color: #f3ca0a
  }

  .is-grammatical framework {
background-color: #79aa7a
  }

  .is-game maker language {
background-color: #8fb200
  }

  .is-papyrus {
background-color: #6600cc
  }

  .is-netlinx+erb {
background-color: #747faa
  }

  .is-clean {
background-color: #3F85AF
  }

  .is-alloy {
background-color: #64C800
  }

  .is-squirrel {
background-color: #800000
  }

  .is-pawn {
background-color: #dbb284
  }

  .is-unrealscript {
background-color: #a54c4d
  }

  .is-standard ml {
background-color: #dc566d
  }

  .is-slim {
background-color: #ff8f77
  }

  .is-perl6 {
background-color: #0000fb
  }

  .is-julia {
background-color: #a270ba
  }

  .is-haskell {
background-color: #29b544
  }

  .is-ncl {
background-color: #28431f
  }

  .is-io {
background-color: #a9188d
  }

  .is-rouge {
background-color: #cc0088
  }

  .is-cpp {
background-color: #f34b7d
  }

  .is-ags script {
background-color: #B9D9FF
  }

  .is-dogescript {
background-color: #cca760
  }

  .is-nesc {
background-color: #94B0C7
  }

`;

export const darkTheme = {
  body: '#0d1117',
  grey: '#8b949e',
  grey2: '#c5ced7',
  justWhite: '#fff',
  button: '#22262c',
  borderButton: 'transparent',
  borderField: '#8B949E',
  topic: 'rgba(56,139,253,.15)',
  colorTopic: '#58a6ff',
  borderBottom: '#30363d',
  menuModal: '#212730',
  layerModal: 'rgba(49, 49, 49, 0.671)',
  scrollBar: '#424242',
  scroll: '#686868',
  modalContent: 'rgba(30, 29, 38, 1)',
};

export const ligthTheme = {
  body: '#f5f5f5',
  grey: '#57606a',
  grey2: '#24292f',
  justWhite: '#000',
  button: '#f6f8fa',
  borderButton: 'rgba(27,31,36,.15)',
  borderField: 'rgba(27,31,36,.15)',
  topic: '#ddf4ff',
  colorTopic: '#0969da',
  borderBottom: '#d0d7de',
  menuModal: '#fff',
  layerModal: 'rgba(240, 235, 246, 0.103)',
  scrollBar: '#cdd9e5',
  scroll: '#c1c1c1',
  modalContent: '#fff',
  // modalContent: 'rgba(243, 240, 245, 1)',
};
