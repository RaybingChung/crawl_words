import json
import pandas as pd

with open('./word_list.csv', "r", encoding='utf-8-sig') as fp:
    word_list = fp.read()

word_list = json.loads(word_list)
word_list = pd.DataFrame(word_list)
word_list.to_csv("formatted_word_list.csv", encoding='utf-8-sig')



    



