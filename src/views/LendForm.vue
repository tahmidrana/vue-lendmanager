<template>
  <div id="lend-area">
    <form action>
      <h3 class="text-center">New Record</h3>
      <br>
      <div class="form-group row">
        <label for="amount" class="col-sm-3 col-form-label">Amount</label>
        <div class="col-sm-9">
          <input type="number" name="amount" id="" class="form-control" min="0" placeholder="500">
        </div>
      </div>
      <div class="form-group row">
        <label for="person" class="col-sm-3 col-form-label">Person</label>
        <div class="col-sm-9">
          <select class="custom-select" name="person">
            <option selected="">Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-3">Record Type</label>
        <div class="col-sm-9">
          <div class="custom-control custom-radio">
            <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" checked="">
            <label class="custom-control-label" for="customRadio1">Lend</label>
          </div>
          <div class="custom-control custom-radio">
            <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
            <label class="custom-control-label" for="customRadio2">Borrow</label>
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="dueDate" class="col-sm-3 col-form-label">Due Date</label>
        <div class="col-sm-9">
          <input type="date" name="dueDate" id="" class="form-control">
        </div>
      </div>
      <div class="form-group row">
        <label for="short_note" class="col-sm-3 col-form-label">Short Note</label>
        <div class="col-sm-9">
          <textarea name="short_note" id="" class="form-control" cols="30" rows="3"></textarea>
        </div>
      </div>
      <input type="submit" name="" id="" class="btn btn-primary float-right" value="Save Record">
      <div class="clearfix"></div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LendForm'
}
</script>

<style>
.lend-area{
    width: 100%;
    padding: 5px;
}
.lend-area h1 {
  margin-bottom: 10px;
}
</style>
