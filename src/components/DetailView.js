import React, { useEffect, useState } from 'react';
// import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { Map, APILoader } from '@uiw/react-baidu-map';
import ReactEcharts from 'echarts-for-react';
import { store } from '../store';
const universityMapping = {
  "University of Oxford": 1,
  "Stanford University": 2,
  "Massachusetts Institute of Technology": 3,
  "Harvard University": 4,
  "University of Cambridge": 5,
  "Princeton University": 6,
  "California Institute of Technology": 7,
  "Imperial College London": 8,
  "University of California, Berkeley": 9,
  "Yale University": 10,
  "ETH Zurich": 11,
  "Tsinghua University": 12,
  "The University of Chicago": 13,
  "Peking University": 14,
  "Johns Hopkins University": 15,
  "University of Pennsylvania": 16,
  "Columbia University": 17,
  "University of California, Los Angeles": 18,
  "National University of Singapore": 19,
  "Cornell University": 20,
  "University of Toronto": 21,
  "UCL": 22,
  "University of Michigan-Ann Arbor": 23,
  "Carnegie Mellon University": 24,
  "University of Washington": 25,
  "Duke University": 26,
  "New York University": 27,
  "Northwestern University": 28,
  "The University of Tokyo": 29,
  "University of Edinburgh": 30,
  "Technical University of Munich": 31,
  "Nanyang Technological University, Singapore": 32,
  "École Polytechnique Fédérale de Lausanne": 33,
  "University of California, San Diego": 34,
  "University of Hong Kong": 35,
  "Georgia Institute of Technology": 36,
  "University of Melbourne": 37,
  "King’s College London": 38,
  "LMU Munich": 39,
  "Paris Sciences et Lettres – PSL Research University Paris": 40,
  "University of British Columbia": 41,
  "University of Illinois at Urbana-Champaign": 42,
  "Shanghai Jiao Tong University": 43,
  "Fudan University": 44,
  "KU Leuven": 45,
  "London School of Economics and Political Science": 46,
  "University of Heidelberg": 47,
  "Delft University of Technology": 48,
  "McGill University": 49,
  "Karolinska Institute": 50,
  "University of Manchester": 51,
  "University of Texas at Austin": 52,
  "Chinese University of Hong Kong": 53,
  "Monash University": 54,
  "Kyoto University": 55,
  "Zhejiang University": 56,
  "University of Science and Technology of China": 57,
  "University Paris-Saclay": 58,
  "University of California, Davis": 59,
  "The University of Sydney": 60,
  "University of Amsterdam": 61,
  "Seoul National University": 62,
  "University of Wisconsin-Madison": 63,
  "Brown University": 64,
  "The Hong Kong University of Science and Technology": 65,
  "Wageningen University & Research": 66,
  "Australian National University": 67,
  "Washington University in St. Louis": 68,
  "University of California, Santa Barbara": 69,
  "The University of Queensland": 70,
  "Institut Polytechnique de Paris": 71,
  "University of North Carolina at Chapel Hill": 72,
  "Nanjing University": 73,
  "University of Southern California": 74,
  "Sorbonne University": 75,
  "Yonsei University (Seoul campus)": 76,
  "Leiden University": 77,
  "Boston University": 78,
  "University of Groningen": 79,
  "University of Zurich": 80,
  "University of Bristol": 81,
  "City University of Hong Kong": 82,
  "Korea Advanced Institute of Science and Technology (KAIST)": 83,
  "UNSW Sydney": 84,
  "University of Minnesota": 85,
  "Purdue University West Lafayette": 86,
  "University of Glasgow": 87,
  "Hong Kong Polytechnic University": 88,
  "Humboldt University of Berlin": 89,
  "RWTH Aachen University": 90,
  "University of Bonn": 91,
  "University of California, Irvine": 92,
  "Vanderbilt University": 93,
  "Charité - Universitätsmedizin Berlin": 94,
  "Lomonosov Moscow State University": 95,
  "University of Tübingen": 96,
  "KTH Royal Institute of Technology": 97,
  "University of Southampton": 98,
  "Erasmus University Rotterdam": 99,
  "Ohio State University (Main campus)": 100,
  "University of Birmingham": 101,
  "Free University of Berlin": 102,
  "University of Copenhagen": 103,
  "McMaster University": 104,
  "University of Sheffield": 105,
  "Emory University": 106,
  "Lund University": 107,
  "University of Warwick": 108,
  "Aarhus University": 109,
  "University of Alberta": 110,
  "University of Adelaide": 111,
  "University of Göttingen": 112,
  "University de Montréal": 113,
  "University of Maryland, College Park": 114,
  "Ghent University": 115,
  "University of Bern": 116,
  "Michigan State University": 117,
  "Texas A&M University": 118,
  "Rice University": 119,
  "University of Vienna": 120,
  "University of Helsinki": 121,
  "Penn State (Main campus)": 122,
  "University of Basel": 123,
  "University of Massachusetts": 124,
  "Vrije Universiteit Amsterdam": 125,
  "Technical University of Denmark": 126,
  "University of Oslo": 127,
  "University of Freiburg": 128,
  "University of Leeds": 129,
  "University of Nottingham": 130,
  "Tohoku University": 131,
  "University of Florida": 132,
  "University of Rochester": 133,
  "Trinity College Dublin": 134,
  "Queen Mary University of London": 135,
  "University of Hamburg": 136,
  "Technical University of Berlin": 137,
  "University of Colorado Boulder": 138,
  "Maastricht University": 139,
  "Karlsruhe Institute of Technology": 140,
  "Radboud University Nijmegen": 141,
  "Uppsala University": 142,
  "University of Lausanne": 143,
  "The University of Western Australia": 144,
  "University of Pittsburgh-Pittsburgh campus": 145,
  "Sungkyunkwan University (SKKU)": 146,
  "University of York": 147,
  "University of Technology Sydney": 148,
  "Pohang University of Science and Technology (POSTECH)": 149,
  "University of Auckland": 150,
  "Sichuan University": 151,
  "University of Barcelona": 152,
  "National Taiwan University (NTU)": 153,
  "University Paris Cité": 154,
  "University of Arizona": 155,
  "University of Bologna": 156,
  "Lancaster University": 157,
  "Huazhong University of Science and Technology": 158,
  "University of Waterloo": 159,
  "University of Cologne": 160,
  "University of Antwerp": 161,
  "Dartmouth College": 162,
  "TU Dresden": 163,
  "Case Western Reserve University": 164,
  "Wuhan University": 165,
  "University of Virginia (Main campus)": 166,
  "University of Cape Town": 167,
  "University Catholique de Louvain": 168,
  "Eindhoven University of Technology": 169,
  "Harbin Institute of Technology": 170,
  "University of Liverpool": 171,
  "Newcastle University": 172,
  "Scuola Normale Superiore di Pisa": 173,
  "Durham University": 174,
  "Osaka University": 175,
  "University of Würzburg": 176,
  "Beijing Normal University": 177,
  "University of Exeter": 178,
  "University of Ottawa": 179,
  "Macquarie University": 180,
  "Sapienza University of Rome": 181,
  "Arizona State University (Tempe)": 182,
  "University of Geneva": 183,
  "University of Twente": 184,
  "Stockholm University": 185,
  "Tongji University": 186,
  "Georgetown University": 187,
  "University of Mannheim": 188,
  "Chalmers University of Technology": 189,
  "Cardiff University": 190,
  "Tokyo Institute of Technology": 191,
  "Tufts University": 192,
  "University of Erlangen-Nuremberg": 193,
  "University of Macau": 194,
  "University of Münster": 195,
  "University of St Andrews": 196,
  "Ulm University": 197,
  "Indiana University": 198,
  "University of Notre Dame": 199,
  "Queensland University of Technology": 200,
  "Ulsan National Institute of Science and Technology (UNIST)": 201
};
const data = [
  [98.5, 98, 97.9, 97.8, 97.5, 96.9, 96.5, 95.1, 94.6, 94.2, 93.1, 92.4, 92.1, 91.8, 91.1, 91, 90.9, 90.1, 90, 89.5, 88.6, 88.1, 87.4, 86.3, 85.3, 83.9, 83.5, 83.2, 83.1, 82.5, 82.5, 82.3, 81.4, 81, 80.3, 80, 79.2, 79, 79, 78.5, 78, 77.9, 77.7, 77.5, 77, 76.8, 76.7, 76.3, 76, 75.9, 75.6, 75.5, 75.4, 75.2, 75, 75, 74.8, 74.4, 74.1, 73.8, 73.6, 73.4, 73.3, 73, 73, 73, 72.6, 72.3, 72.1, 72, 71.3, 71.2, 70.9, 70.8, 70.5, 70.4, 70.2, 70.1, 70, 69.9, 69.8, 69.3, 69.2, 68.9, 68.7, 68.5, 68.2, 68.2, 68.2, 68, 67.8, 67.4, 67.4, 67.2, 67, 67, 66.9, 66.9, 66.7, 66.7, 66.6, 66.5, 66.3, 66.3, 66.2, 66.1, 66.1, 66.1, 65.9, 65.9, 65.8, 65.8, 65.8, 65.7, 65.6, 65.4, 65.4, 65.3, 65.2, 65.2, 65.1, 65, 64.9, 64.9, 64.7, 64.6, 64.3, 64.1, 63.9, 63.8, 63.8, 63.7, 63.6, 63.2, 63.1, 63, 63, 62.9, 62.9, 62.8, 62.8, 62.8, 62.7, 62.7, 62.5, 62.5, 62.4, 62.3, 62.2, 62, 62, 61.9, 61.9, 61.9, 61.8, 61.8, 61.8, 61.7, 61.7, 61.5, 61.4, 61.4, 61.4, 61.3, 61.3, 61.1, 60.9, 60.8, 60.8, 60.8, 60.8, 60.8, 60.8, 60.6, 60.4, 60.4, 60.2, 60.2, 60.2, 60.1, 60, 59.9, 59.8, 59.7, 59.6, 59.6, 59.5, 59.5, 59.4, 59.3, 59.2, 59.2, 59, 59, 59, 59, 59, 58.9, 58.7, 58.7, 58.7],
  [96.6, 99, 98.6, 97.7, 95.8, 96.3, 96.6, 90.9, 87.2, 94, 87.6, 95.3, 89.6, 95.6, 84.4, 87.7, 88.6, 85.7, 78.8, 85.7, 77.5, 78.4, 84.7, 75, 78, 79.3, 73.2, 72.3, 93.9, 70.7, 69.8, 66.2, 74.5, 66, 65.6, 63.4, 64.8, 59.8, 65.3, 75.7, 62.5, 69.5, 76.6, 76.5, 60.1, 59.5, 67.7, 66.7, 62.3, 58.9, 61.4, 66, 59.1, 55.3, 85.4, 70.2, 74.3, 70.9, 63.7, 52.6, 55, 74.2, 68.5, 69.8, 54, 56.4, 55.9, 60.8, 47.4, 52.9, 71, 63.4, 64, 59.2, 64.7, 68.1, 46, 59.6, 47.5, 54.8, 48.7, 52.2, 67.1, 47.2, 61, 64, 48.1, 45.7, 55.3, 54.9, 51.7, 47.1, 54.1, 47.5, 87.5, 49.1, 53.5, 48.9, 38.5, 55.8, 46.1, 52.1, 49.2, 43.8, 48, 53.1, 46.7, 48.1, 44.9, 50.1, 42.4, 50, 51.2, 49.4, 47.2, 45.1, 54.8, 55.2, 56.4, 48.7, 48.1, 53.1, 50.8, 54, 40.4, 50.7, 45.6, 46.7, 46.1, 45.6, 67.8, 55.5, 50.8, 44, 37.6, 44.7, 47.8, 46.5, 41.4, 49.9, 39.1, 43.9, 41.7, 37.7, 49.1, 55.5, 42.4, 36.2, 58.1, 39.7, 59.1, 42.4, 57.3, 47.9, 48.7, 53, 40.2, 48.8, 42.2, 42.9, 38.2, 57.3, 46.6, 51.7, 50.9, 51.1, 38.7, 39.5, 47.4, 58.8, 38.4, 37.2, 60.1, 43.5, 62.5, 40.3, 57.7, 33.5, 39.6, 36.7, 53.5, 40.9, 41.8, 43.4, 32.1, 50, 52.6, 36.5, 42.7, 35.5, 59.5, 51.5, 42.6, 38.4, 43.8, 46, 40.6, 47.3, 51.9, 33.9, 47.7],
  [100, 97.8, 96.2, 99.9, 100, 97.9, 98, 95.5, 98.8, 94.9, 96.8, 98.1, 91.2, 97.3, 92.3, 89.7, 89.7, 91.9, 94, 88.7, 94.1, 86.4, 87.4, 84.6, 83.5, 76.1, 84, 78.8, 94.2, 77.5, 85.1, 80.9, 73.2, 78.4, 72.3, 78.9, 76.4, 75.1, 76.8, 72.8, 76.6, 81.5, 82.5, 75.3, 74.9, 73.5, 64.3, 78.2, 72.3, 67.9, 67.1, 75.7, 61.5, 67.8, 84.3, 75.3, 66.3, 66.1, 67.8, 68.9, 63.1, 75.3, 67.5, 59.6, 62.1, 59.8, 68, 57.2, 64.7, 64.3, 61.6, 60.3, 61.7, 58.8, 60.8, 64.3, 62.7, 54.1, 57.2, 53.4, 56.5, 52.4, 65.8, 57.4, 58.5, 65.3, 51.8, 54.1, 63.7, 64.8, 57.7, 53.8, 48.5, 49.1, 75.2, 56.5, 57.8, 50.1, 54.1, 52.7, 49.3, 59.7, 51.1, 51.3, 49.5, 45.7, 56.6, 52.1, 59, 55.5, 50.6, 54.8, 54.1, 58.1, 59.3, 47, 52.3, 62.1, 45.6, 60.3, 57.6, 58.7, 42.9, 46.9, 51, 47.4, 50.6, 51.3, 49.1, 45.9, 66.4, 56.7, 42.9, 48.4, 42.6, 53.3, 55.6, 51.9, 47.1, 56.8, 51, 55, 46.3, 48.6, 46.1, 54.2, 44.8, 43.3, 51.5, 45.7, 57.3, 47.3, 54.8, 42.7, 51.3, 44.6, 40.7, 48.1, 49.3, 47.1, 44.4, 40.7, 51.1, 40.2, 45, 40.1, 47, 49.4, 51.5, 55.1, 40.2, 41.1, 42.6, 44.5, 65.7, 43.4, 45.8, 42.5, 46.5, 44.2, 48.1, 46.2, 38, 46, 49.6, 53.6, 37, 45.4, 46.6, 39.6, 63.3, 35, 48.1, 38.1, 47.3, 42.6, 41.2, 38.4, 42.6, 42.1, 40.8],
  [99, 99.6, 99.7, 99.4, 98, 98.8, 95.9, 98.6, 99, 97.7, 95.6, 93.2, 97.6, 87.2, 97.2, 97.6, 97.4, 96.4, 95.4, 97.6, 92.8, 98.6, 95.5, 98.9, 98.2, 96.2, 94.9, 97.8, 67.8, 96.9, 90, 94.5, 90.3, 97.6, 96.4, 94.1, 90.1, 97.7, 92.2, 83.2, 90.5, 85.2, 75.4, 83.5, 91.9, 95.4, 94.6, 76.5, 88.8, 95.3, 93.1, 91, 97.6, 94.7, 60, 78.7, 88.2, 82.4, 87.2, 92, 96.7, 74.6, 85.5, 89.7, 92.9, 93.8, 86.6, 97.5, 96.9, 89.1, 70.8, 93.9, 85.3, 92.5, 83.7, 79.3, 93, 94.3, 94.5, 91.8, 97.3, 91.1, 77.4, 91.1, 87.2, 71.8, 96.8, 94.5, 82.8, 78.9, 89.7, 93.2, 96, 97.7, 33.9, 89, 81, 92.7, 96.9, 88.4, 95.5, 82.5, 91.3, 93, 92.3, 95.5, 86.6, 89, 86.3, 80.9, 92.8, 90.1, 81.7, 92.8, 85.3, 93.3, 86.2, 77.3, 86.5, 77.4, 90.6, 83.7, 87.7, 87.3, 93.4, 83.2, 92.1, 86.2, 87.3, 90.6, 53.8, 78.3, 88.3, 87.6, 97.9, 84.8, 78.1, 88.6, 86.1, 72.5, 91.3, 81.3, 87.3, 88.7, 92.4, 72.9, 90.8, 95.9, 77.2, 88.3, 69.3, 91.4, 70.8, 90.6, 85.7, 86.5, 93.9, 90, 83.7, 85.6, 92.5, 84.7, 79.3, 88.7, 88.5, 88.9, 88.3, 83.1, 71.3, 70.9, 93.4, 93.8, 82.9, 83.5, 50.5, 90.8, 77.5, 95.7, 84.4, 87.4, 77.9, 87.5, 86.7, 75.1, 91, 69.5, 85.1, 90.2, 79.4, 91.9, 49.4, 87.5, 79.7, 90.3, 83.7, 77.7, 87.9, 84.9, 76.1, 89.5, 85],
  [98.7, 100, 100, 84.2, 87.9, 95.1, 100, 90.9, 99.4, 86.5, 82.9, 99.9, 93.8, 98.8, 100, 97.7, 75.2, 92.3, 100, 69.4, 96.1, 75.2, 80.7, 87.3, 77.6, 100, 75.4, 99.7, 100, 71.1, 100, 99.7, 99.8, 100, 95.2, 94.6, 98.3, 74.2, 100, 99.7, 76.7, 85.3, 100, 96, 100, 55.9, 99.3, 100, 76.1, 96, 73.1, 81.4, 95.9, 99.7, 100, 99, 95.6, 92.4, 91.5, 97.7, 77.6, 100, 79.8, 69.3, 100, 98.8, 82, 77.8, 99.4, 99.8, 98.8, 75.8, 96.8, 74.4, 69.5, 99.9, 98.1, 76.4, 99.9, 93.7, 72.3, 100, 100, 98.6, 99.8, 84.3, 69.7, 87.4, 65.4, 100, 82.6, 96.1, 96.5, 100, 91.1, 99.8, 97.7, 73.1, 94.7, 85, 72.1, 71.6, 89.5, 100, 77.5, 81.6, 99.8, 70.5, 98.7, 99.9, 95, 70.8, 96.6, 70.2, 99.7, 99.2, 70, 76.4, 73.9, 75.9, 69.2, 70.4, 99.4, 85.6, 91.5, 99.7, 72.3, 100, 68.8, 71.2, 99.9, 88.9, 89, 76.6, 73.9, 98.6, 99.9, 82.8, 98.1, 99.9, 81.4, 97.7, 99.5, 97.2, 76.1, 98.8, 66.9, 78.9, 100, 95.8, 93.2, 83.9, 99.9, 68.3, 84, 79.4, 66.6, 96.9, 78.3, 98.8, 98.4, 68.4, 99.7, 71.4, 90.6, 79.9, 78.2, 92, 100, 91.2, 64.9, 72.1, 34.9, 65.6, 100, 99.6, 67.6, 52.2, 80.2, 90.9, 85.4, 71.5, 80.7, 99.6, 59.2, 85.4, 92.2, 93.6, 97.1, 70.4, 100, 71.7, 100, 61.9, 81.5, 63.6, 99.6, 85.8, 72.9, 85.9, 94.6],
  [97.5, 87, 93.8, 90.8, 97.4, 89.1, 90.6, 98.3, 86.8, 82.4, 95.6, 51.7, 82.3, 70.2, 84.2, 78.8, 86.9, 74.3, 91.1, 86, 90.7, 97.9, 69, 85.5, 73.2, 74.8, 80.7, 75.9, 49.7, 97, 83.1, 93.3, 95.8, 74.3, 96.8, 84.8, 92.7, 97.5, 76.9, 81.6, 95, 64, 60.6, 56.1, 79.6, 94.1, 76.4, 92.8, 92.5, 85.7, 95.6, 47.3, 93.6, 91.1, 45.7, 65.5, 45.4, 78.6, 78.7, 90.2, 93.2, 43.7, 62.8, 72.1, 95.5, 92.4, 94.8, 72.7, 84, 94, 97.1, 50.9, 61.8, 74.3, 78.8, 51.8, 87.8, 74.1, 93.4, 92.4, 92.5, 98.7, 41.6, 94.5, 48.3, 76.7, 96.1, 96.3, 79, 71.2, 73.8, 80.9, 62.9, 75.2, 73.8, 72, 82.5, 96.5, 90.6, 67.3, 95.1, 82.4, 80.1, 87.3, 92, 69.3, 79.8, 96.4, 76.3, 90.7, 92.9, 70.7, 87.7, 48.6, 65.7, 87, 71.4, 64.1, 85.8, 94.9, 56.7, 58.4, 95.4, 77.3, 84.3, 92.2, 75.6, 74.2, 94.6, 92.8, 58.5, 50.9, 81.7, 91.4, 98.1, 65.7, 71.3, 56.6, 97.4, 77.6, 77.7, 74.7, 90.4, 93.5, 50.9, 61.3, 93.1, 94.3, 40, 89.9, 46.1, 65.2, 51.2, 73.2, 47, 54.3, 96.8, 32.9, 89.3, 73.3, 74.7, 60.2, 67.9, 65, 41, 60.8, 82.9, 83.1, 87.3, 33.9, 96.4, 91.3, 59.3, 95.8, 51, 63.2, 52.3, 95.5, 86.9, 88.6, 46.5, 71.7, 97.1, 93.3, 81.2, 67.7, 53.2, 63.7, 74.1, 92.5, 60.1, 62.8, 61, 93.7, 53.5, 95.8, 63, 64.7, 69.9, 82.2, 46.5]
];
export default function DetailView({ selectedXValue }) {

  // const { state, dispatch } = useContext(store);
  useEffect(() => {
    var myChart_1 = echarts.init(document.getElementById('chart_1'));
    var option = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['scores_overall', 'scores_teaching', 'scores_research',
          'scores_citations', 'scores_industry_income', 'scores_international_outlook']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: Object.keys(universityMapping)
        // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'scores_overall',
          type: 'line',


          data: data[0]
        },
        {
          name: 'scores_teaching',
          type: 'line',

          data: data[1]
        },
        {
          name: 'scores_research',
          type: 'line',

          data: data[2]
        },
        {
          name: 'scores_citations',
          type: 'line',

          data: data[3]
        },
        {
          name: 'scores_industry_income',
          type: 'line',

          data: data[4]
        },
        {
          name: 'scores_international_outlook',
          type: 'line',

          data: data[5]
        }
      ]
    }
    myChart_1.setOption(option);
    console.log('selectedXValue:', selectedXValue);
    var x_value = universityMapping[selectedXValue];
    console.log('x_value:', x_value);

    if (selectedXValue) {
      const xValueIndex = Object.keys(universityMapping).indexOf(selectedXValue);
      if (xValueIndex !== -1) {
        myChart_1.setOption({
          series: option.series.map((series, seriesIndex) => ({
            ...series,
            markLine: {
              data: [
                {
                  xAxis: xValueIndex,
                  lineStyle: {
                    color: 'red',
                    type: 'dashed'
                  },
                  label: {
                    position: 'end',
                    formatter: '{b}'
                  }
                }
              ]
            },
            markPoint: {
              data: [
                {
                  coord: [xValueIndex, data[seriesIndex][xValueIndex]],
                  symbol: 'circle',
                  symbolSize: 10,
                  itemStyle: {
                    color: 'red'
                  },
                  label: {
                    show: true,
                    formatter: `{@[0]}: {@[1]}`,
                    position: 'top'
                  }
                }
              ]
            }
          }))
        });
      }
    }



  }, [selectedXValue]);
  const divStyle_De = {
    width: '800px',
    height: '200px',
    backgroundColor: 'white'
  }
  return <div style={divStyle_De}>
    <br></br>
    <br></br>
    <br></br>
    <div>DetailView</div>
    <br></br>
    <div id="chart_1" style={{ width: '600px', height: '285px' }}></div>
  </div>
}
