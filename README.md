# Coding Challenge 

## Overview

For the below assignment, you may use any language of your choice and any frameworks/libraries thatyou wish.

All design and quality choices are your decisions to make.

Assessment You are given a set of inputs, a set of expressions that transform inputs to outputs, and the expectedoutputs.

The algorithm should be implemented using any approaches/ techniques that you find appropriate.

The following variables are acceptable as


input:A: 
bool


B: bool

C: bool

D: float

E: int

F: int

The outputs are defined as:

H:
one of these predefined values [M, P, T] (e.g. H could be equal to either of 3
values: M, P or T)

K: floating point
number (e.g. float, decimal)The assignment consists of a base expressions set and two custom sets of expressions that
override /extend the base rules.

BaseA && B && !C => H = MA && B && C => H = P!A && B && C => H = T[other]
=> [error]H = M => K = D + (D * E / 10)H = P => K = D + (D * (E - F) / 25.5)H = T => K = D - (D * F / 30)

### Super Easy Install

```
yarn 
yarn start
```
