import random

def generateStart():
    l1 = sorted(random.sample(range(1,11), 3))
    l2 = sorted(random.sample(range(11,16),3))
    return sorted(l1+l2)

def makeTotal(l):
    goal = 0
    if len(l) == 1:
        return l[0]
    a,b = sorted(random.sample(range(0,len(l)), 2))
    if (max(l) > 600):
        operation = random.choice(['-', '/'])
    else:
        operation = random.choice(['+','-','*', '/'])
    if operation == '+':
        goal = l[a] + l[b]
        print(str(l[a])+"+"+str(l[b]))
    elif operation == '-':
        if(l[b] - l[a] >=0):
            goal = l[b] - l[a]
            print(str(l[b])+"-"+str(l[a]))
        else:
            goal = l[a] - l[b]
            print(str(l[a])+"-"+str(l[b]))
    elif operation == '*':
        goal = l[a] * l[b]
        print(str(l[a])+"*"+str(l[b]))
    elif operation == '/':
        if l[a] != 0 and l[b]!=0 and l[b]%l[a] == 0:
            goal = l[b]/l[a]
            print(str(l[b])+"/"+str(l[a]))
        else:
            goal = l[b]+l[a]
            print(str(l[a])+"+"+str(l[b]))

    l.pop(b)
    l.pop(a)
    l.append(int(goal))
    print(l)
    return makeTotal(l)

    
    
r = generateStart()
print(r)
print(makeTotal(r))
f = open('db.txt', 'w')
for i in range(10):
    r = generateStart()
    g = makeTotal(r.copy())
    r.append(g)
    print(r,end=",\n")
    f.write(str(r)+",")
