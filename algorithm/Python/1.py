import math

def solution(b):
  c = -1

  for a in range(3, b):
    c_squared = a**2 + b**2
    if math.sqrt(c) % 1 == 0:
      c = math.sqrt(c_squared)
      break
  return c
  