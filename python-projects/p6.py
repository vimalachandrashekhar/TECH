#tic-tac-toe game
board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
]


def print_board():
    for row in board:
        print("|".join(row))


def check_win(player):
    for i in range(3):
        if board[i][0] == board[i][1] == board[i][2] == player:
            return True
        if board[0][i] == board[1][i] == board[2][i] == player:
            return True
    if board[0][0] == board[1][1] == board[2][2] == player:
        return True
    if board[0][2] == board[1][1] == board[2][0] == player:
        return True
    return False

def play_game():
    print("Welcome to Tic-Tac-Toe!")
    print("Player 1 is X and Player 2 is O.")
    current_player = "X"
    while True:
        print_board()
        move = input(f"Player {current_player}, enter your move (row,col): ")
        row, col = move.split(",")
        row = int(row) - 1
        col = int(col) - 1
        if board[row][col] != " ":
            print("That space is already taken. Try again.")
            continue
        board[row][col] = current_player
        if check_win(current_player):
            print_board()
            print(f"Player {current_player} wins!")
            break
        if all(" " not in row for row in board):
            print_board()
            print("It's a tie!")
            break
        current_player = "O" if current_player == "X" else "X"


play_game()
