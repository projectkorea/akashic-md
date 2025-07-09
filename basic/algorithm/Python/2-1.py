S3 = ""
S1_idx = 0
S2_idx = 0
# def calc_quad_tree():
#   # 2. 더하기

def sum_quad_tree(S1_part, S2_part):
  global S3, S1_idx, S2_idx
  S3 += "p" 

  for i in range(4):
    
    if S1_part[i+S1_idx] == "b" or S2_part[i+S2_idx] =="b":
      if S1_part[i+S1_idx] == "p":
        S1_idx += 4
      if S2_part[i+S2_idx] == "p":
        S2_idx += 4
      S3 += "b"
    elif S1_part[i+S1_idx] == "p" and S2_part[i+S2_idx] =="p":
      sum_quad_tree(S1_part[1:], S2_part[1:])
      S1_idx += 4
      S2_idx += 4
    elif S1_part[i+S1_idx] == "p":
      sum_quad_tree(S1_part[1:], "wwww" + S2_part)
      # 중간에 w가 붙어야대는데
      S1_idx += 4
    elif S2_part[i+S2_idx] =="p":
      sum_quad_tree("wwww" + S1_part, S2_part[1:])
      S2_idx += 4
    elif S1_part[i+S1_idx] == "w" and S2_part[i+S2_idx] == "w":
      S3 += "w"
  

def Solution(S1, S2):
  global S3
  
  if S1[0] == "b" or  S2[0] =="b":
    return 1024
  elif S1[0] == "w" and S2[0] =="w":
    return 0
  elif S1[0] =="p" and S2[0] =="p":
    sum_quad_tree(S1[1:], S2[1:])
  elif S1[0] =="p":
    sum_quad_tree(S1[1:], S2)
  elif S2[0] =="p":
    sum_quad_tree(S1, S2[1:])

Solution("ppwwwbpbbwwbw", "pwbwpwwbw")
print(S3)