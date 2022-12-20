def num(a):
    if ord(a) >= 48 and ord(a) <= 57:
        return True
    else:
        return False

def ALP(a):
    if ord(a) >= 97 and ord(a) <= 122:
        return True
    else:
        return False
def alp(a):
    if ord(a) >= 65 and ord(a) <= 90:
        return True
    else:
        return False

def edit_dist(str1, str2):
    dp = [[0] * (len(str2)+1) for _ in range(len(str1) + 1)]
    for i in range(1, len(str1)+1):
        dp[i][0] = i * 5
    for j in range(1, len(str2)+1):
        dp[0][j] = j * 5

    for i in range(1, len(str1)+1):
        for j in range(1, len(str2)+1):
            if str1[i-1] == str2[j-1]:
                dp[i][j] = dp[i-1][j-1]
            else:
                # 둘다 숫자인경우
                if num(str1[i-1]) and num(str2[j-1]):
                    dp[i][j] = min(dp[i-1][j-1] + abs(int(str1[i-1])-int(str2[j-1])), dp[i-1][j]+5, dp[i][j-1]+5)
                #둘다 알파벳이면서 다른 경우
                elif alp(str1[i-1]) and alp(str2[j-1]):
                    dp[i][j] = min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 5
                elif ALP(str1[i-1]) and ALP(str2[j-1]):
                    dp[i][j] = min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 5
                #대소문자만 다른경우
                elif alp(str1[i-1]) and ALP(str2[j-1]):
                    dp[i][j] = min(dp[i-1][j-1]+1, dp[i-1][j]+5, dp[i][j-1]+5)
                elif ALP(str1[i-1]) and alp(str2[j-1]):
                    dp[i][j] = min(dp[i-1][j-1]+1, dp[i-1][j]+5, dp[i][j-1]+5)
                #하나는 알파벳 하나는 숫자인경우
                elif (alp(str1[i-1]) or ALP(str1[i-1])) and num(str2[j-1]):
                    dp[i][j] = min(dp[i-1][j-1]+7, dp[i-1][j]+5, dp[i][j-1]+5) 
                elif (alp(str2[j-1]) or ALP(str2[j-1])) and num(str1[i-1]): 
                    dp[i][j] = min(dp[i-1][j-1]+7, dp[i-1][j]+5, dp[i][j-1]+5) 
                #나머지 삽입 삭제
                else:
                    dp[i][j] = min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 5

    return dp[-1][-1]

x = input()
y = input()
print(edit_dist(x, y))
